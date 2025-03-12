import User from '../models/user.js';
import express from 'express';
import jwt from 'jsonwebtoken';

const router = express.Router();
const jwtstr = "kavy0707@";  // Secret key for JWT

// User Registration
router.post('/createuser', async (req, res) => {
    const { Firstname, Lastname, Number, email, Username, password } = req.body;
    try {
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ success: false, error: "User with this email already registered" });
        }

        user = await User.create({ Firstname, Lastname, Number, email, Username, password });

        const data = { user: { id: user.id } };
        const token = jwt.sign(data, jwtstr, { expiresIn: '1h' });

        res.json({ success: true, user, token });
    } catch (error) {
        console.error("Error:", error.message);
        res.status(500).json({ success: false, error: "Some error occurred" });
    }
});

// User Login
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        let user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ success: false, error: "User not found" });
        }

        if (password !== user.password) {
            return res.status(400).json({ success: false, error: "Incorrect password" });
        }

        const data = {
            user: {
                "id": user.id
            }
        }

        var token = await jwt.sign(data, jwtstr);

        res.json({ success: true, message: "Login successful", user, token });
    } catch (error) {
        console.error("Login Error:", error);
        res.status(500).json({ success: false, error: "Some error occurred" });
    }
});

export default router;
