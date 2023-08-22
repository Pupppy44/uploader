const express = require('express');
const multer = require('multer');

const app = express();
const port = 3000;
const storage_path = './uploads/';

const storage = multer.diskStorage({
    destination: storage_path,
    filename: function (req, file, callback) {
        callback(null, file.originalname);
    }
});

const upload = multer({ storage });

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.post('/api/upload', upload.array('images'), (req, res) => {
    res.json({ success: true });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});