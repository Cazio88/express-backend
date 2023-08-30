const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

// GET request handler
app.get('/', (req, res) => {
    res.send('GET request received');
});

// POST request handler
app.post('/', (req, res) => {
    res.send('POST request received');
});

// PUT request handler
app.put('/', (req, res) => {
    res.send('PUT request received');
});

// DELETE request handler
app.delete('/', (req, res) => {
    res.send('DELETE request received');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});