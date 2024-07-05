const express = require('express');
const bcrypt = require('bcryptjs'); // Import bcryptjs for password hashing
const User = require('../models/user-model.js');

const Register = async (req, res) => {
    try {
        const { fullname, email, password, confirmPassword } = req.body;

        // Check if all required fields are provided
        if (!fullname || !email || !password || !confirmPassword) {
            return res.status(400).json({
                success: false,
                message: 'Please enter all fields',
            });
        }

        // Check if user with the same email already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: 'Email already exists',
            });
        }

        // Check if password and confirmPassword match
        if (password !== confirmPassword) {
            return res.status(400).json({
                success: false,
                message: 'Passwords do not match',
            });
        }

        // Hash the password using bcrypt
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new user instance with hashed password
        let newUser = new User({
            fullname,
            email,
            password: hashedPassword,
            confirmPassword: hashedPassword, // Store hashed password in both fields for simplicity
        });

        // Save user to database
        await newUser.save();

        // Respond with success message and user data
        return res.status(200).json({
            success: true,
            message: 'User registered successfully',
            user: newUser,
        });
    } catch (err) {
        console.error('Registration error:', err);
        return res.status(500).json({
            success: false,
            message: 'Server Error',
            error: err.message, // Provide the error message for debugging
        });
    }
};

module.exports = Register;
