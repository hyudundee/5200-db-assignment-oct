const express = require('express');
const app = express();
app.get('/', (req, res) => {
    res.send('Hello, my server')
});

app.listen(3000, () => {
    console.log("Server running at port 3000");
});