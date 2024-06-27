import User from "../models/usermodel.js";
// usercreate 
import connection from '../index.js'; // Import MySQL connection
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';


export const login = async (req, res) => {
    console.log("login enter...")
    const { email, password } = req.body;
    try {
        connection.query(
            'SELECT * FROM users WHERE email = ?',
            [email],
            async (error, results) => {
                if (error) {
                    console.error('Error checking user:', error);
                    return res.status(500).json({ error: 'Failed to check user' });
                }

                if (results.length === 0) {
                    return res.status(404).json({ message: "User not found" });
                }

                const user = results[0];

                const passwordMatch = await bcrypt.compare(password, user.password);
                if (!passwordMatch) {
                    return res.status(401).json({ message: "Invalid password" });
                }

                const token = jwt.sign({ id: user.id, role: user.role }, 'your_jwt_secret', {
                    expiresIn: '3d',
                });

                res.status(200).json({ statusCode: "200", message: "User logged in successfully", token });
            }
        );
    } catch (error) {
        console.log("Error in login:", error);
        res.status(500).json({ error: error.message });
    }
};
export const create = async (req, res) => {
    try {
        const { username, email, password, role } = req.body;
        console.log("req.body ...", req.body);

        // Perform validation if necessary
        if (!username || !email || !password) {
            return res.status(400).json({ msg: 'All filed are required' });
        }
        const userRole = role || 'user';

        // Check if the email already exists
        connection.query(
            'SELECT * FROM users WHERE email = ?',
            [email],
            async (error, results) => {
                if (error) {
                    console.error('Error checking email:', error);
                    return res.status(500).json({ error: 'Failed to check email' });
                }
                if (results.length > 0) {
                    return res.status(400).json({ error: 'Email already in use' });
                }

                // Hash the password
                try {
                    const hashedPassword = await bcrypt.hash(password, 10);

                    // Insert user data into MySQL
                    connection.query(
                        'INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)',
                        [username, email, hashedPassword, userRole],
                        (error, results) => {
                            if (error) {
                                console.error('Error inserting user:', error);
                                return res.status(500).json({ error: 'Failed to create user' });
                            }
                            console.log('User created successfully');
                            res.status(201).json({ statusCode: "201", message: 'User created successfully' });
                        }
                    );
                } catch (hashError) {
                    console.error('Error hashing password:', hashError);
                    res.status(500).json({ error: 'Failed to hash password' });
                }
            }
        );

    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ error: error.message });
    }
};
export const createkYC = async (req, res) => {
    try {
        const { email_id, password, account_holder_name, account_number,confirm_account_number,ifsc_code,bank_name,branch} = req.body;
        // Perform validation if necessary
        if (!email_id || !password || !account_holder_name || !account_number || !confirm_account_number || !ifsc_code || !bank_name || !branch) {
            return res.status(400).json({ msg: 'All filed are required ' });
        }
        connection.query(
            'INSERT INTO kyc_form (email_id, password, account_holder_name, account_number,confirm_account_number,ifsc_code,bank_name,branch) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
            [email_id, password, account_holder_name, account_number,confirm_account_number,ifsc_code,bank_name,branch],
            (error, results) => {
                if (error) {
                    console.error('Error inserting user:', error);
                    return res.status(500).json({ error: 'Failed to create user' });
                }
                console.log('Kyc created successfully');
                res.status(201).json({ statusCode: "201", message: 'Kyc created successfully' });
            }
        );
////
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ error: error.message });
    }
};
export const getAll = async (req, res) => {
    try {
        console.log("enter in get all ....")
        connection.query(
            'SELECT * FROM users',
            (error, results) => {
                if (error) {
                    console.error('Error fetching users:', error);
                    return res.status(500).json({ error: 'Failed to fetch users' });
                }

                if (results.length === 0) {
                    return res.status(404).json({ msg: "No users found" });
                }

                res.status(200).json(results);
            }
        );
    } catch (error) {
        console.error('Error in getAll:', error);
        res.status(500).json({ error: error.message });
    }
};

export const getOne = async (req, res) => {
    try {
        const id = req.params.id;
        
        connection.query(
            'SELECT * FROM users WHERE id = ?',
            [id],
            (error, results) => {
                if (error) {
                    console.error('Error fetching user:', error);
                    return res.status(500).json({ error: 'Failed to fetch user' });
                }

                if (results.length === 0) {
                    return res.status(404).json({ msg: 'User not found' });
                }

                const user = results[0];
                res.status(200).json(user);
            }
        );
    } catch (error) {
        console.error('Error in getOne:', error);
        res.status(500).json({ error: error.message });
    }
};
// data updat button 
export const update = async (req, res) => {
    try {
        // const id = req.params.id;
        const { username, email, role ,id} = req.body; // Assuming these are the fields you want to update

        // Check if user exists
        connection.query(
            'SELECT * FROM users WHERE id = ?',
            [id],
            (error, results) => {
                if (error) {
                    console.error('Error fetching user:', error);
                    return res.status(500).json({ error: 'Failed to fetch user' });
                }

                if (results.length === 0) {
                    return res.status(404).json({ msg: 'User not found' });
                }

                // Update user
                connection.query(
                    'UPDATE users SET name = ?, email = ?, role = ? WHERE id = ?',
                    [username, email, role, id],
                    (error) => {
                        if (error) {
                            console.error('Error updating user:', error);
                            return res.status(500).json({ error: 'Failed to update user' });
                        }
                        res.status(200).json({statusCode:"201", message: 'User updated successfully' });
                    }
                );
            }
        );
    } catch (error) {
        console.error('Error in update:', error);
        res.status(500).json({ error: error.message });
    }
};
// export const update = async (req, res) => {
//     try {
//         const id = req.params.id;
//         const userExist = await User.findById(id);
//         if (!userExist) {
//             return res.status(401).json({ msg: "user note found" });
//         }
//         const updateDate = await User.findByIdAndUpdate(id, req.body, { new: true });
//         res.status(200).json({ msg: "user has updated succesfully" });
//     } catch (error) {
//         res.status(500).json({ error: error });
//     }
// }

// delet api user
export const deleteUser = async (req, res) => {
    try {
        const id = req.params.id;

        // Check if user exists
        connection.query(
            'SELECT * FROM users WHERE id = ?',
            [id],
            (error, results) => {
                if (error) {
                    console.error('Error fetching user:', error);
                    return res.status(500).json({ error: 'Failed to fetch user' });
                }

                if (results.length === 0) {
                    return res.status(404).json({ msg: 'User not found' });
                }

                // Delete user
                connection.query(
                    'DELETE FROM users WHERE id = ?',
                    [id],
                    (error) => {
                        if (error) {
                            console.error('Error deleting user:', error);
                            return res.status(500).json({ error: 'Failed to delete user' });
                        }
                        res.status(200).json({ statusCode:"201",message: 'User deleted successfully' });
                    }
                );
            }
        );
    } catch (error) {
        console.error('Error in deleteUser:', error);
        res.status(500).json({ error: error.message });
    }
};
export const getAllKYC = async (req, res) => {
    try {
        connection.query(
            'SELECT * FROM kyc_form',
            (error, results) => {
                if (error) {
                    console.error('Error fetching users:', error);
                    return res.status(500).json({ error: 'Failed to fetch users' });
                }

                if (results.length === 0) {
                    return res.status(404).json({ msg: "No found data" });
                }

                res.status(200).json({statusCode:"200",data:results});
            }
        );
    } catch (error) {
        console.error('Error in getAll:', error);
        res.status(500).json({ error: error.message });
    }
};
