import express from 'express';
import { dirname, join } from 'path';

const __filename = require.main.filename;
const __dirname = dirname(__filename);

const app = express();
app.use(express.static('public/dist'));

app.get('/', (req, res) => {
  res.sendFile(join(__dirname, 'index.html'));
});

app.get('/404', (req, res) => {
  res.sendFile(join(__dirname, 'public', 'dist', '404.html'));
});

app.get('/500', (req, res) => {
  res.sendFile(join(__dirname, 'public', 'dist', '500.html'));
});

app.get('/chats', (req, res) => {
  res.sendFile(join(__dirname, 'public', 'dist', 'chats.html'));
});

app.get('/message', (req, res) => {
  res.sendFile(join(__dirname, 'public', 'dist', 'message.html'));
});

app.get('/signup', (req, res) => {
  res.sendFile(join(__dirname, 'public', 'dist', 'signup.html'));
});

app.get('/user_profile', (req, res) => {
  res.sendFile(join(__dirname, 'public', 'dist', 'user_profile.html'));
});

app.get('*', (req, res) => {
  res.sendFile(join(__dirname, 'public', 'dist', '404.html'));
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
