document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    const mockCredentials = {
        username: "user1",
        password: "password123"
    };

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === mockCredentials.username && password === mockCredentials.password) {
        localStorage.setItem('loggedInUser', username); // Store username
        window.location.href = "index.html";
    } else {
        document.getElementById('error').textContent = "Invalid username or password!";
    }
});

// On page load, display the username if logged in
document.addEventListener('DOMContentLoaded', () => {
    const userGreeting = document.getElementById('user-greeting');
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
        userGreeting.textContent = `Hello, ${loggedInUser}!`;
    }
});

// login.js
document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");
    const userGreeting = document.getElementById("user-greeting");
    const errorMessage = document.getElementById("error");
    
    // Check if the user is already signed in
    const username = localStorage.getItem("username");
    if (username) {
        showUserGreeting(username);
        unlockFeatures();
    }

    // Handle Login Form Submission
    if (loginForm) {
        loginForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const usernameInput = document.getElementById("username").value;
            const passwordInput = document.getElementById("password").value;

            // Validate credentials (basic example)
            if (usernameInput && passwordInput) {
                localStorage.setItem("username", usernameInput); // Save username
                showUserGreeting(usernameInput);
                unlockFeatures();
                errorMessage.textContent = ""; // Clear errors
                window.location.href = "index.html"; // Redirect to home page
            } else {
                errorMessage.textContent = "Please enter valid credentials!";
            }
        });
    }

    // Show Username and Signed In Message
    function showUserGreeting(username) {
        if (userGreeting) {
            userGreeting.textContent = `Welcome, ${username}! (Signed In)`;
        }
    }

    // Unlock Features for Logged-In Users
    function unlockFeatures() {
        const lockedFeatures = document.querySelectorAll(".locked-feature");
        lockedFeatures.forEach((feature) => {
            feature.classList.remove("locked-feature");
            feature.classList.add("unlocked-feature");
        });
    }
});
