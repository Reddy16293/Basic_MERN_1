const express = require('express');
const connectdb = require('./Config/databases.js');
const apiroutes = require('./routes/index.js');

const app = express();

// Middleware for parsing JSON and URL-encoded bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes using apiroutes for '/apiroutes'
app.use('/api', apiroutes);

// Basic route
app.get('/', (req, res) => {
    res.send('Hello World');
});

// Start server
const PORT = 3000;
app.listen(PORT, async () => {
    try {
        await connectdb();
        console.log(`Server is running on port ${PORT}`);
    } catch (error) {
        console.error('Error connecting to database:', error);
    }
});
