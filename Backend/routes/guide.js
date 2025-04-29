import Guide from '../models/guide.js';
import express from 'express';
import jwt from 'jsonwebtoken';

const router = express.Router();
const jwtstr = "kavy0707@";  // Secret key for JWT

// User Registration
router.post('/localguide', async (req, res) => {
    const { name, email, phonenumber, city, experience, language, bio } = req.body;
    try {
        let guide = await Guide.findOne({ email });
        if (guide) {
            return res.status(400).json({ success: false, error: "User with this email already registered" });
        }

        guide = await Guide.create({ name, email, phonenumber, city, experience, language, bio });

        const data = { user: { id: guide.id } };
        const token = jwt.sign(data, jwtstr, { expiresIn: '1h' });

        res.json({ success: true, guide, token });
    } catch (error) {
        console.error("Error:", error.message);
        res.status(500).json({ success: false, error: "Some error occurred" });
    }
});


router.get('/showguide', async (req, res) => {
    const { cityname } = req.query;

    try {
       const guide = await Guide.find({ city: { $regex: new RegExp(`^${cityname}$`, 'i') } });
 
        if (!guide || guide.length === 0) {
            return res.status(404).json({ error: "Guide not Found" });
        }

        res.json({ message: "guide available", guides: guide });  // ✅ fixed key
    } catch (error) {
        console.error(error);
        res.status(500).json("some error occurred");
    }
});

export default router;