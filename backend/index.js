import express from 'express';
// import mongoose from 'mongoose';
import mysql from 'mysql2';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';
import route from './routes/userrouts.js';

// Initialize dotenv to use environment variables
dotenv.config();

// Initialize express
const app = express();
app.use(bodyParser.json());
app.use(cors());

// Port and MongoDB URL from environment variables
const PORT = process.env.PORT || 7000;
// Connect to MongoDB
const connection = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
});
connection.connect((err) => {
    if (err) {
        console.error('Database connection error:', err.stack);
        return;
    }
    console.log('Connected to MySQL database');
});
// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.use("/api", route);

export default connection;