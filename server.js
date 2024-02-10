import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
app.use(express.static('public/dist'));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/404', function (req, res) {
    res.sendFile(join(__dirname, 'public', 'dist', '404.html'));
});

app.get('/500', function (req, res) {
    res.sendFile(join(__dirname, 'public', 'dist', '500.html'));
});

app.get('/chats', function (req, res) {
    res.sendFile(join(__dirname, 'public', 'dist', 'chats.html'));
});

app.get('/message', function (req, res) {
    res.sendFile(join(__dirname, 'public', 'dist', 'message.html'));
});

app.get('/signup', function (req, res) {
    res.sendFile(join(__dirname, 'public', 'dist', 'signup.html'));
});

app.get('/user_profile', function (req, res) {
    res.sendFile(join(__dirname, 'public', 'dist', 'user_profile.html'));
});

app.get('*', function (req, res) {
    res.sendFile(join(__dirname, 'public', 'dist', '404.html'));
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
