const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.set('view engine', 'ejs');
app.use(express.static('public'));

const db = new sqlite3.Database('database.db', (err) => {
    if (err) {
        console.error('Error opening database:', err.message);
    }
});

db.run(`
    CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT NOT NULL,
        email TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL
    );
`);

app.get('/', (req, res) => {
    res.redirect('/login');
});

app.get('/signup', (req, res) => {
    res.render('signup');
});

app.post('/signup', (req, res) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        return res.status(400).send('All fields are required!');
    }

    const query = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
    db.run(query, [username, email, password], function (err) {
        if (err) {
            return res.status(500).send('Error creating user: ' + err.message);
        }
        res.redirect('/login');
    });
});

app.get('/login', (req, res) => {
    res.render('login');
});

app.post('/login', (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).send('Email and password are required!');
    }

    db.get('SELECT * FROM users WHERE email = ?', [email], (err, row) => {
        if (err) {
            return res.status(500).send('Database error!');
        }

        if (!row) {
            return res.status(400).send('User not found');
        }

        if (password === row.password) {
            res.redirect('/profile');
        } else {
            res.status(400).send('Incorrect password');
        }
    });
});

app.get('/profile', (req, res) => {
    res.render('profile', { username: 'Logged in User' });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
