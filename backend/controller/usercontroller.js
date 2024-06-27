import User from "../models/usermodel.js";
// usercreate 
import connection from '../index.js'; // Import MySQL connection
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';


export const login = async (req, res) => {
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
                    expiresIn: '1h',
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
            return res.status(400).json({ msg: 'Please provide username, email, and password' });
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
// export const login = async (req, res) => {
//     const { email, password } = req.body;
//     try {
//         // Check if the user exists
//         connection.query(
//             'SELECT * FROM users WHERE email = ?',
//             [email],
//             async (error, results) => {
//                 if (error) {
//                     console.error('Error checking user:', error);
//                     return res.status(500).json({ error: 'Failed to check user' });
//                 }

//                 if (results.length === 0) {
//                     return res.status(404).json({ message: "User not found" });
//                 }

//                 const user = results[0];

//                 // Check if the password matches
//                 const passwordMatch = await bcrypt.compare(password, user.password);
//                 if (!passwordMatch) {
//                     return res.status(401).json({ message: "Invalid password" });
//                 }

//                 // Create a token
//                 const token = jwt.sign({ id: user.id, role: user.role }, 'your_jwt_secret', {
//                     expiresIn: '1h',
//                 });

//                 res.status(200).json({ statusCode: "200", message: "User logged in successfully", token });
//             }
//         );
//     } catch (error) {
//         console.log("Error in login:", error);
//         res.status(500).json({ error: error.message });
//     }
// };
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

// localhost:7000/api/create path in create 
// export const create = async (req, res) => {
//     try {
//         console.log("enter in create user function...")
//         const userData = new User(req.body);
//         console.log("send data by user....", userData);
//         if (!userData) {
//             console.log("error...")
//             return res.status(404).json({ msg: "User data not found" })
//         }
//         const saveData = await userData.save();
//         console.log("save data as...", saveData)
//         res.status(200).json({ message: "successfully submit data .." });

//     } catch (error) {
//         console.log("error is ....catch is working.", error)
//         res.status(500).json({ error: error });
//     }
// }
// login data 
// import User from '../models/User.js';
// import jwt from 'jsonwebtoken';

// export const login = async (req, res) => {
//     const { email, password } = req.body;
//     try {
//         const user = await User.findOne({ email });
//         if (!user) {
//             return res.status(404).json({ message: "User not found" });
//         }

//         // Check if the password matches
//         if (user.password !== password) {
//             return res.status(401).json({ message: "Invalid password" });
//         }

//         // Create a token
//         const token = jwt.sign({ id: user._id }, 'your_jwt_secret', {
//             expiresIn: '1h',
//         });

//         res.status(200).json({ statusCode: "200", message: "User loging Successfully", token });
//         // res.status(200).redirect('/dashboardheader');
//     } catch (error) {
//         console.log("Error in login:", error);
//         res.status(500).json({ error: error.message });
//     }
// };

// export const login = async (req, res) => {
//     try {
//         console.log("enter in login ...")

//         res.status(200).json({ message: "successfully login data .." });

//     } catch (error) {
//         console.log("error is ....catch is working.", error)
//         res.status(500).json({ error: error });
//     }
// }




// export const login = async (req, res) => {
//     const { email, password } = req.body;
//     try {
//         // Check if the user exists
//         connection.query(
//             'SELECT * FROM users WHERE email = ?',
//             [email],
//             async (error, results) => {
//                 if (error) {
//                     console.error('Error checking user:', error);
//                     return res.status(500).json({ error: 'Failed to check user' });
//                 }

//                 if (results.length === 0) {
//                     return res.status(404).json({ message: "User not found" });
//                 }

//                 const user = results[0];

//                 // Check if the password matches
//                 const passwordMatch = await bcrypt.compare(password, user.password);
//                 if (!passwordMatch) {
//                     return res.status(401).json({ message: "Invalid password" });
//                 }

//                 // Create a token
//                 const token = jwt.sign({ id: user.id }, 'your_jwt_secret', {
//                     expiresIn: '1h',
//                 });

//                 res.status(200).json({ statusCode: "200", message: "User logged in successfully", token });
//             }
//         );
//     } catch (error) {
//         console.log("Error in login:", error);
//         res.status(500).json({ error: error.message });
//     }
// };
// all data fetch 2
// export const getAll = async (req, res) => {
//     try {
//         const userData = await User.find();
//         if (!userData) {
//             return res.status(404).json({ msg: "User data is not found" });
//         }
//         res.status(200).json(userData);

//     } catch (error) {
//         res.status(500).json({ error: error });
//     }
// }

// one single pertion data
// localhost:7000/api/getOne/66473316b377fc1e3921f916 path in post man check
// export const getOne = async (req, res) => {
//     try {
//         const id = req.params.id;
//         const userExist = await User.findById(id);
//         if (!userExist) {
//             return res.status(404).json({ msg: 'User not found' })
//         }
//         res.status(200).json(userExist);
//     } catch (error) {
//         res.status(500).json({ error: error });
//     }
// }
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
                        res.status(200).json({ msg: 'User updated successfully' });
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
                        res.status(200).json({ msg: 'User deleted successfully' });
                    }
                );
            }
        );
    } catch (error) {
        console.error('Error in deleteUser:', error);
        res.status(500).json({ error: error.message });
    }
};
// export const deleteUser = async (req, res) => {

//     try {
//         const id = req.params.id;
//         const userExist = await User.findById(id);
//         if (!userExist) {
//             return res.status(404).json({ msg: "user is not exite" })
//         }
//         await User.findByIdAndDelete(id);
//         res.status(200).json({ msg: "user deleted sucessfully" })

//     } catch (error) {
//         res.status(500).json({ error: error });
//     }
// }

