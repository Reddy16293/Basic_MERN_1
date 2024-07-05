const express = require('express');
const User = require('../models/user-model.js');
const bcrypt = require('bcryptjs'); // For hashing passwords

const Login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if email and password are provided
        if (!email || !password) {
            return res.json({
                success: false,
                message: 'Please enter all fields',
            });
        }

        // Find user by email
        const user = await User.findOne({ email });

        // Check if user exists
        if (!user) {
            return res.json({
                success: false,
                message: 'User not found',
            });
        }

        // Compare passwords
        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch) {
            return res.json({
                success: false,
                message: 'Invalid credentials',
            });
        }

        // If login successful, return success message and user data
        return res.json({
            success: true,
            message: 'User logged in successfully',
            user: user,
        });
    } catch (error) {
        console.error('Login error:', error);
        return res.status(500).json({
            success: false,
            message: 'Server Error',
            error: error.message, // Provide the error message for debugging
        });
    }
};

module.exports = Login;
