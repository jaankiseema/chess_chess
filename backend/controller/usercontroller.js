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
	const { username, email, password, role, user_ref_id } = req.body;
	if (!username || !email || !password || !user_ref_id) {
            return res.status(400).json({ msg: 'All fields are required' });
        }
        const userRole = role || 'user';
		 // Generate reference ID
        const generateRefId = () => {
            const randomSixDigit = Math.floor(100000 + Math.random() * 900000).toString();
            return `chess${randomSixDigit}`;
        };

        const referenceId = generateRefId();

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
 // Check if the provided user_ref_id exists
                connection.query(
                    'SELECT * FROM users WHERE ref_id = ?',
                    [user_ref_id],
                    async (refError, refResults) => {
                        if (refError) {
                            console.error('Error checking ref_id:', refError);
                            return res.status(500).json({ error: 'Failed to check ref_id' });
                        }
						  if (refResults.length === 0) {
                            return res.status(400).json({ error: 'Invalid referral ID' });
                        }

                        // Hash the password
                        try {
                            const hashedPassword = await bcrypt.hash(password, 10);

                            // Insert user data into MySQL
                            connection.query(
                                'INSERT INTO users (name, email, password, role, ref_id) VALUES (?, ?, ?, ?, ?)',
                                [username, email, hashedPassword, userRole, referenceId],
                                (insertError, insertResults) => {
                                    if (insertError) {
                                        console.error('Error inserting user:', insertError);
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
            }
        );

    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ error: error.message });
    }
};
// export const create = async (req, res) => {
//     try {
//         const { username, email, password, role, user_ref_id } = req.body;

//         // Perform validation if necessary
//         if (!username || !email || !password) {
//             return res.status(400).json({ msg: 'Username, email, and password are required' });
//         }
//         const userRole = role || 'user';

//         // Generate reference ID
//         const generateRefId = () => {
//             const randomSixDigit = Math.floor(100000 + Math.random() * 900000).toString();
//             return `chess${randomSixDigit}`;
//         };

//         // Check if the provided user_ref_id exists
//         const checkRefId = () => {
//             return new Promise((resolve, reject) => {
//                 connection.query(
//                     'SELECT * FROM users WHERE ref_id = ?',
//                     [user_ref_id],
//                     (refError, refResults) => {
//                         if (refError) {
//                             console.error('Error checking ref_id:', refError);
//                             return reject('Failed to check ref_id');
//                         }
//                         if (refResults.length === 0) {
//                             return resolve(null);
//                         }
//                         resolve(user_ref_id);
//                     }
//                 );
//             });
//         };

//         let referenceId = await checkRefId();
//         if (!referenceId) {
//             referenceId = generateRefId();
//         }

//         // Check if the email already exists
//         connection.query(
//             'SELECT * FROM users WHERE email = ?',
//             [email],
//             async (error, results) => {
//                 if (error) {
//                     console.error('Error checking email:', error);
//                     return res.status(500).json({ error: 'Failed to check email' });
//                 }
//                 if (results.length > 0) {
//                     return res.status(400).json({ error: 'Email already in use' });
//                 }

//                 // Hash the password
//                 try {
//                     const hashedPassword = await bcrypt.hash(password, 10);

//                     // Insert user data into MySQL
//                     connection.query(
//                         'INSERT INTO users (name, email, password, role, ref_id) VALUES (?, ?, ?, ?, ?)',
//                         [username, email, hashedPassword, userRole, referenceId],
//                         (insertError, insertResults) => {
//                             if (insertError) {
//                                 console.error('Error inserting user:', insertError);
//                                 return res.status(500).json({ error: 'Failed to create user' });
//                             }
//                             console.log('User created successfully');
//                             res.status(201).json({ statusCode: "201", message: 'User created successfully' });
//                         }
//                     );
//                 } catch (hashError) {
//                     console.error('Error hashing password:', hashError);
//                     res.status(500).json({ error: 'Failed to hash password' });
//                 }
//             }
//         );

//     } catch (error) {
//         console.error('Error creating user:', error);
//         res.status(500).json({ error: error.message });
//     }
// };

export const createkYC = async (req, res) => {
    try {
        const { email_id, password, account_holder_name, account_number, confirm_account_number, ifsc_code, bank_name, branch } = req.body;
        // Perform validation if necessary
        const user_id = jwt.decode(req.headers.authorization.split(' ')[1]).id;
        if (!email_id || !password || !account_holder_name || !account_number || !confirm_account_number || !ifsc_code || !bank_name || !branch) {
            return res.status(400).json({ msg: 'All filed are required ' });
        }
        connection.query(
            'INSERT INTO kyc_form (email_id, password, account_holder_name, account_number,confirm_account_number,ifsc_code,bank_name,branch,user_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
            [email_id, password, account_holder_name, account_number, confirm_account_number, ifsc_code, bank_name, branch, user_id],
            (error, results) => {
                if (error) {
                    console.error('Error inserting user:', error);
                    return res.status(500).json({ error: 'Failed to create user' });
                }
                console.log('Kyc created successfully');
                res.status(201).json({ statusCode: "201", message: 'Kyc created successfully' });
            }
        );
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ error: error.message });
    }
};
export const getAll = async (req, res) => {
    try {
        console.log("enter in get all ....");
        connection.query(
            `SELECT u1.*, 
                    u2.id AS ref_user_id, u2.name AS ref_name, u2.email AS ref_email, u2.role AS ref_role
             FROM users u1 
             LEFT JOIN users u2 ON u1.ref_id = u2.ref_id`,
            (error, results) => {
                if (error) {
                    console.error('Error fetching users:', error);
                    return res.status(500).json({ error: 'Failed to fetch users' });
                }

                if (results.length === 0) {
                    return res.status(404).json({ msg: "No users found" });
                }

                const usersWithRef = results.map(user => ({
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    password: user.password,
                    role: user.role,
                    ref_user: user.ref_user_id ? {
                        // id: user.ref_user_id,
                        ref_id: user.ref_id,
                        name: user.ref_name,
                        email: user.ref_email,
                        role: user.ref_role
                    } : null
                }));

                res.status(200).json(usersWithRef);
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
        const { username, email, role, id } = req.body; // Assuming these are the fields you want to update

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
                        res.status(200).json({ statusCode: "201", message: 'User updated successfully' });
                    }
                );
            }
        );
    } catch (error) {
        console.error('Error in update:', error);
        res.status(500).json({ error: error.message });
    }
};
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
                        res.status(200).json({ statusCode: "201", message: 'User deleted successfully' });
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
                    return res.status(404).json({ message: "No found data" });
                }

                res.status(200).json({ statusCode: "200", data: results });
            }
        );
    } catch (error) {
        console.error('Error in getAll:', error);
        res.status(500).json({ error: error.message });
    }
};
export const getSingleKYC = async (req, res) => {
    try {
        const user_id = jwt.decode(req.headers.authorization.split(' ')[1]).id;
        connection.query(
            'SELECT * FROM kyc_form WHERE user_id=?', [user_id],
            (error, results) => {
                if (error) {
                    console.error('Error fetching users:', error);
                    return res.status(500).json({ error: 'Failed to fetch users' });
                }

                if (results.length === 0) {
                    return res.status(404).json({ message: "No found data" });
                }

                res.status(200).json({ statusCode: "200", data: results });
            }
        );
    } catch (error) {
        console.error('Error in getAll:', error);
        res.status(500).json({ error: error.message });
    }
};
export const addDeposite = async (req, res) => {
    try {
        const { transation_id, amount } = req.body;
        const user_id = jwt.decode(req.headers.authorization.split(' ')[1]).id;
        const status = 0;
        if (!transation_id || !amount) {
            return res.status(400).json({ message: 'All filed are required ' });
        }
        if (amount >= 30) {
            connection.query(
                'INSERT INTO deposite (transation_id, amount,status,user_id ) VALUES (?, ?, ?, ?)',
                [transation_id, amount, status, user_id],
                (error, results) => {
                    if (error) {
                        console.error('Error inserting user:', error);
                        return res.status(500).json({ error: 'Failed deposite' });
                    }
                    console.log('Kyc created successfully');
                    res.status(201).json({ statusCode: "201", message: 'deposit added successfully' });
                }
            );
        }
        else {
            return res.status(400).json({ statusCode: "400", message: 'you can deposite amount less then 30 rs ' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
export const allDeposites = async (req, res) => {
    try {
        connection.query(
            'SELECT * FROM deposite',
            (error, results) => {
                if (error) {
                    return res.status(500).json({ error: 'Failed to fetch users' });
                }
                if (results.length === 0) {
                    return res.status(404).json({ message: "No found data" });
                }

                res.status(200).json({ statusCode: "200", data: results });
            }
        );
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
export const getUserDeposits = async (req, res) => {
    try {
        const user_id = jwt.decode(req.headers.authorization.split(' ')[1]).id;
        connection.query(
            'SELECT * FROM deposite WHERE user_id=?', [user_id],
            (error, results) => {
                if (error) {
                    return res.status(500).json({ error: 'Failed to fetch users' });
                }
                if (results.length === 0) {
                    return res.status(404).json({ message: "No found data" });
                }

                res.status(200).json({ statusCode: "200", data: results });
            }
        );
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
export const approveDepositRequest = async (req, res) => {
    try {
        const { id } = req.body;
        if (!id) {
            return res.status(400).json({ message: 'id is required ' });
        }

        connection.query(
            'SELECT * FROM deposite WHERE id = ?',
            [id],
            (selectError, selectResults) => {
                if (selectError) {
                    console.error('Error fetching deposit:', selectError);
                    return res.status(500).json({ error: 'Failed to fetch deposit' });
                }

                if (selectResults.length === 0) {
                    return res.status(404).json({ message: 'Deposit not found' });
                }

                const deposit = selectResults[0];

                connection.query(
                    'UPDATE deposite SET status = 1 WHERE id = ?',
                    [id],
                    (updateError, updateResults) => {
                        if (updateError) {
                            console.error('Error updating deposit:', updateError);
                            return res.status(500).json({ error: 'Failed to update deposit' });
                        }

                        connection.query(
                            'UPDATE users SET fond = ? WHERE id = ?',
                            [deposit.amount, deposit.user_id],
                            (updateUserError, updateUserResults) => {
                                if (updateUserError) {
                                    console.error('Error updating user fond:', updateUserError);
                                    return res.status(500).json({ error: 'Failed to update user fond' });
                                }

                                res.status(201).json({ statusCode: "201", message: 'Deposit approved successfully' });
                            }
                        );
                    }
                );
            }
        );
    } catch (error) {
        console.error('Error in approveDepositRequest:', error);
        res.status(500).json({ error: error.message });
    }
};
export const addfond = async (req, res) => {
    try {
        const { amount } = req.body;
        const user_id = jwt.decode(req.headers.authorization.split(' ')[1]).id;
        const status = 0;

        if (!amount) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        if (amount < 30) {
            return res.status(400).json({ statusCode: "400", message: 'You cannot deposit an amount less than 30 rs' });
        }

        connection.query(
            'SELECT fond FROM users WHERE id = ?',
            [user_id],
            (selectError, selectResults) => {
                if (selectError) {
                    console.error('Error fetching user fond:', selectError);
                    return res.status(500).json({ error: 'Failed to fetch user fond' });
                }

                if (selectResults.length === 0) {
                    return res.status(404).json({ message: 'User not found' });
                }

                const userFond = selectResults[0].fond;

                if (userFond === 0 || amount > userFond) {
                    return res.status(400).json({ statusCode: "400", message: 'Your amount is not sufficient' });
                }

                connection.query(
                    'INSERT INTO withdraw (amount, status, user_id) VALUES (?, ?, ?)',
                    [amount, status, user_id],
                    (insertError, insertResults) => {
                        if (insertError) {
                            console.error('Error inserting deposit request:', insertError);
                            return res.status(500).json({ error: 'Failed to deposit' });
                        }

                        console.log('Deposit request created successfully');
                        res.status(201).json({ statusCode: "201", message: 'Fond added successfully' });
                    }
                );
            }
        );
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getUserwithdrawn = async (req, res) => {
    try {
        const user_id = jwt.decode(req.headers.authorization.split(' ')[1]).id;
        connection.query(
            'SELECT * FROM withdraw WHERE user_id=?', [user_id],
            (error, results) => {
                if (error) {
                    return res.status(500).json({ error: 'Failed to fetch users' });
                }
                if (results.length === 0) {
                    return res.status(404).json({ message: "No found data" });
                }

                res.status(200).json({ statusCode: "200", data: results });
            }
        );
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
export const getWithdrawn = async (req, res) => {
    try {
        connection.query(
            `SELECT 
            withdraw.id, 
            withdraw.amount, 
            withdraw.status, 
            withdraw.user_id, 
            withdraw.date,
            users.name,
            users.email
        FROM 
            withdraw
        INNER JOIN 
            users ON withdraw.user_id = users.id`,
            (error, results) => {
                if (error) {
                    return res.status(500).json({ error: 'Failed to fetch users' });
                }
                if (results.length === 0) {
                    return res.status(404).json({ message: "No found data" });
                }

                res.status(200).json({ statusCode: "200", data: results });
            }
        );
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const approveFondRequest = async (req, res) => {
    try {
        const { id } = req.body;
        if (!id) {
            return res.status(400).json({ message: 'ID is required' });
        }

        connection.query(
            'SELECT * FROM withdraw WHERE id = ?',
            [id],
            (selectError, selectResults) => {
                if (selectError) {
                    console.error('Error fetching withdraw request:', selectError);
                    return res.status(500).json({ error: 'Failed to fetch withdraw request' });
                }

                if (selectResults.length === 0) {
                    return res.status(404).json({ message: 'Withdraw request not found' });
                }

                const withdrawRequest = selectResults[0];

                connection.query(
                    'UPDATE withdraw SET status = 1 WHERE id = ?',
                    [id],
                    (updateError, updateResults) => {
                        if (updateError) {
                            console.error('Error updating withdraw request:', updateError);
                            return res.status(500).json({ error: 'Failed to update withdraw request' });
                        }

                        connection.query(
                            'SELECT fond FROM users WHERE id = ?',
                            [withdrawRequest.user_id],
                            (selectUserError, selectUserResults) => {
                                if (selectUserError) {
                                    console.error('Error fetching user fond:', selectUserError);
                                    return res.status(500).json({ error: 'Failed to fetch user fond' });
                                }

                                if (selectUserResults.length === 0) {
                                    return res.status(404).json({ message: 'User not found' });
                                }

                                const currentFond = selectUserResults[0].fond;
                                const newFond = currentFond - withdrawRequest.amount;

                                connection.query(
                                    'UPDATE users SET fond = ? WHERE id = ?',
                                    [newFond, withdrawRequest.user_id],
                                    (updateUserError, updateUserResults) => {
                                        if (updateUserError) {
                                            console.error('Error updating user fond:', updateUserError);
                                            return res.status(500).json({ error: 'Failed to update user fond' });
                                        }

                                        res.status(201).json({ statusCode: "201", message: 'Fond approved successfully' });
                                    }
                                );
                            }
                        );
                    }
                );
            }
        );
    } catch (error) {
        console.error('Error in approveFondRequest:', error);
        res.status(500).json({ error: error.message });
    }
};

export const logout = async (req, res) => {
    const token = req.body.token;

    if (!token) {
        return res.status(400).json({ message: 'Token is required' });
    }

    let decoded;
    try {
        decoded = jwt.verify(token, 'your_jwt_secret');
    } catch (err) {
        return res.status(400).json({ message: 'Invalid token' });
    }

    const userId = decoded.id;

    const query = 'INSERT INTO logout (user_id, token) VALUES (?, ?)';
    connection.query(query, [userId, token], (err, results) => {
        if (err) {
            return res.status(500).json({ message: 'Database error', error: err });
        }
        res.status(200).json({ message: 'Logged out successfully' });
    });
};
// user transation details 
export const getUsertransation = async (req, res) => {
    try {
        const user_id = jwt.decode(req.headers.authorization.split(' ')[1]).id;
        // Get today's date in 'YYYY-MM-DD' format
        const today = new Date();
        const yyyy = today.getFullYear();
        const mm = String(today.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
        const dd = String(today.getDate()).padStart(2, '0');
        const todayStr = `${yyyy}-${mm}-${dd}`;

        connection.query(
            `SELECT 
                u.name,u.email,u.fond AS remaning_fond,
                COALESCE(SUM(CASE WHEN w.status = 1 AND DATE(w.date) = ? THEN w.amount ELSE 0 END), 0) AS total_withdraw_today,
                COALESCE(SUM(CASE WHEN w.status = 0 THEN w.amount ELSE 0 END), 0) AS total_request_fond
             FROM 
                users u
             LEFT JOIN 
                withdraw w ON u.id = w.user_id AND (w.status = 0 OR w.status = 1)
             WHERE 
                u.id = ?
             GROUP BY 
                u.id`,
            [todayStr, user_id],
            (error, results) => {
                if (error) {
                    return res.status(500).json({ error: 'Failed to fetch data' });
                }
                if (results.length === 0) {
                    return res.status(404).json({ message: "No data found" });
                }

                res.status(200).json({
                    statusCode: "200",
                    data: {
                        user_name:results[0].name,
                        email:results[0].email,
                        remaning_fond: results[0].remaning_fond,
                        request_fond: results[0].request_fond,
                        total_Withdrawal_today: results[0].total_withdraw_today,
                        total_request_fond: results[0].total_request_fond
                    }
                });
            }
        );
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
export const gettransation = async (req, res) => {
    try {
        const today = new Date();
        const yyyy = today.getFullYear();
        const mm = String(today.getMonth() + 1).padStart(2, '0');
        const dd = String(today.getDate()).padStart(2, '0');
        const todayStr = `${yyyy}-${mm}-${dd}`;

        connection.query(
            `SELECT 
            SUM(remaning_fond) AS total_remaning_fond,
            SUM(total_withdraw_today) AS total_withdraw_today,
            SUM(total_request_fond) AS total_request_fond
        FROM (
            SELECT 
                u.fond AS remaning_fond,
                COALESCE(SUM(CASE WHEN w.status = 1 AND DATE(w.date) = ? THEN w.amount ELSE 0 END), 0) AS total_withdraw_today,
                COALESCE(SUM(CASE WHEN w.status = 0 THEN w.amount ELSE 0 END), 0) AS total_request_fond
            FROM 
                users u
            LEFT JOIN 
                withdraw w ON u.id = w.user_id AND (w.status = 0 OR w.status = 1)
            GROUP BY u.id
        ) AS subquery_alias;
        `,
            [todayStr],
            (error, results) => {
                if (error) {
                    return res.status(500).json({ error: 'Failed to fetch data' });
                }
                if (results.length === 0) {
                    return res.status(404).json({ message: "No data found" });
                }

                res.status(200).json({
                    statusCode: "200",
                    data: {
                        remaning_fond: results[0].total_remaning_fond,
                        total_Withdrawal_today: results[0].total_withdraw_today,
                        total_request_fond: results[0].total_request_fond
                    }
                });
            }
        );
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
