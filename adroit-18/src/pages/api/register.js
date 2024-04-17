// pages/api/register.js
import { connectMongodb } from '../lib/mongodb';
import User from '../models/user';
import bcrypt from "bcryptjs";

// Ensure the function accepts both req and res parameters
export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            console.log("INSIDE POST BLOCK IN API");
            const { name, email, password } = req.body;

            // Check if all required fields are provided
            if (!name || !email || !password) {
                return res.status(400).json({ message: "All fields are required" });
            }

            const hashedPassword = await bcrypt.hash(password, 10);
            await connectMongodb();
            const user = await User.create({ name, email, password: hashedPassword });

            // Send a JSON response indicating success
            res.status(201).JSON({ message: 'User registered successfully', user });
        } catch (error) {
            console.error('Error creating user:', error);

            // Send a JSON response indicating an internal server error
            res.status(500).json({ message: "Error creating account" });
        }
    } else {
        // If not POST method, indicate that the method is not allowed
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
