import jwt from 'jsonwebtoken';

export const verifyToken = (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) {
        return res.status(403).json({ message: 'No token provided' });
    }

    jwt.verify(token.split(' ')[1], 'your_jwt_secret', (err, decoded) => {
        if (err) {
            return res.status(500).json({ message: 'Failed to authenticate token' });
        }
        req.user = decoded; // attach the decoded token to req.user
        next();
    });
};

export const isAdmin = (req, res, next) => {
    if (req.user.role !== 'admin') {
        return res.status(403).json({ message: 'Require Admin Role' });
    }
    next();
};
