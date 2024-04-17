// server.js
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import bcrypt from 'bcryptjs';
import { userSchema } from '../models/user.js'; // Importing the User schema
import dotenv from 'dotenv';

dotenv.config({ path: './.env.local' });
const PORT = process.env.PORT || 5050;
const ATLAS_URI = process.env.ATLAS_URI;

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(ATLAS_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000,
    socketTimeoutMS: 45000
}).then(() => console.log("MongoDB connection established successfully"))
  .catch(err => console.log(err));

// Create the User model from the schema within the route or global scope
const User = mongoose.model('User', userSchema);

app.post('/register', async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists with this email" }); // Use JSON
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({
            name,
            email,
            password: hashedPassword
        });

        await newUser.save();
        res.status(201).json({ message: "User registered successfully!", user: { name: newUser.name, email: newUser.email } }); // Return minimal user info
    } catch (error) {
        console.error("Error during registration:", error);
        res.status(500).json({ message: "Error registering user: " + error.message });
    }
});


app.listen(PORT, () => {
    console.log(`Express server is running on port ${PORT}`);
});
