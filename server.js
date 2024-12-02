const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static('public'));
app.use(session({
    secret: 'manostithiSecret',
    resave: false,
    saveUninitialized: true,
}));

const users = { 'arjun@example.com': 'password123' };

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    if (users[email] && users[email] === password) {
        req.session.user = email;
        res.json({ success: true, email });
    } else {
        res.json({ success: false });
    }
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
