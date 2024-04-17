// models/user.js
import mongoose from 'mongoose';

const { Schema } = mongoose;

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true // Ensures email addresses are unique in the collection
    },
    password: {
        type: String,
        required: true
    }
}, {
    timestamps: true // Automatically adds createdAt and updatedAt timestamps
});

export { userSchema };  // Export the schema instead of the model
