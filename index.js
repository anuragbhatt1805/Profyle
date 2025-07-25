import express from 'express';

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Hello, Express with ES Modules!');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});