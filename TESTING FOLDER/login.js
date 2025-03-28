document.getElementById("login-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const validEmail = "test@example.com"; // Example email
    const validUsername = "user123"; // Example username
    const validPassword = "password123"; // Example password

    if (email === validEmail && username === validUsername && password === validPassword) {
        document.getElementById("login-message").textContent = "Login successful! Redirecting...";
        
        // Store user data in localStorage
        localStorage.setItem("email", email);
        localStorage.setItem("username", username);
        localStorage.setItem("loggedIn", "true");

        // Redirect to profile page
        setTimeout(() => {
            window.location.href = "profile.html"; // Redirect to profile page
        }, 1000); // Wait 1 second before redirect
    } else {
        document.getElementById("login-message").textContent = "Invalid email, username, or password.";
    }
});

