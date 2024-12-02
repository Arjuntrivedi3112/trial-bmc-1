const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(
  session({
    secret: "manostithiSecretKey",
    resave: false,
    saveUninitialized: true,
  })
);

// Sample Users
let users = {
  "arjun@example.com": {
    password: "password123",
  },
};

// Routes
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (users[email] && users[email].password === password) {
    req.session.user = email;
    res.redirect("/dashboard");
  } else {
    res.send("Invalid login credentials!");
  }
});

app.get("/dashboard", (req, res) => {
  if (req.session.user) {
    res.send(`<h1>Welcome, ${req.session.user}</h1><a href="/logout">Logout</a>`);
  } else {
    res.redirect("/");
  }
});

app.get("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) res.send("Error logging out!");
    else res.redirect("/");
  });
});

// Start Server
app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
