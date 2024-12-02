document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");
    const goButton = document.getElementById("goButton");
    const signedInUsername = document.getElementById("signed-in-username");
    const welcomeUsername = document.getElementById("welcome-username");
    const updateForm = document.getElementById("updateForm");

    let jumpCount = 0; // Counter for the playful login button

    // Initialize stored credentials or create default ones
    if (!localStorage.getItem("username")) localStorage.setItem("username", "user123");
    if (!localStorage.getItem("password")) localStorage.setItem("password", "password123");

    // Playful 'Go' button movement
    goButton.addEventListener("mouseover", function () {
        if (jumpCount < 3) {
            goButton.style.position = "absolute";
            goButton.style.left = `${Math.random() * 80}%`;
            goButton.style.top = `${Math.random() * 80}%`;
            jumpCount++;
        }
    });

    // Handle login
    if (loginForm) {
        loginForm.addEventListener("submit", function (e) {
            e.preventDefault();
            const enteredUsername = document.getElementById("username").value;
            const enteredPassword = document.getElementById("password").value;

            const storedUsername = localStorage.getItem("username");
            const storedPassword = localStorage.getItem("password");

            if (enteredUsername === storedUsername && enteredPassword === storedPassword) {
                alert("Login successful!");
                window.location.href = "index.html"; // Redirect to homepage
            } else {
                document.getElementById("error").textContent = "Invalid username or password!";
            }
        });
    }

    // Show logged-in username dynamically
    if (signedInUsername) {
        signedInUsername.textContent = localStorage.getItem("username");
    }

    if (welcomeUsername) {
        welcomeUsername.textContent = localStorage.getItem("username");
    }

    // Update username/password
    if (updateForm) {
        updateForm.addEventListener("submit", function (e) {
            e.preventDefault();
            const newUsername = document.getElementById("new-username").value;
            const newPassword = document.getElementById("new-password").value;

            if (newUsername) localStorage.setItem("username", newUsername);
            if (newPassword) localStorage.setItem("password", newPassword);

            alert("Account updated successfully!");
            window.location.href = "index.html"; // Refresh changes
        });
    }
});
