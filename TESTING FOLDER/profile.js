// Check if the user is logged in
window.onload = function() {
    const loggedIn = localStorage.getItem("loggedIn");

    if (loggedIn !== "true") {
        // If not logged in, redirect to login page
        window.location.href = "login.html";
    } else {
        // If logged in, display profile data
        const username = localStorage.getItem("username");
        const email = localStorage.getItem("email");

        document.getElementById("profile-username").textContent = username;
        document.getElementById("profile-email").textContent = email;
        document.getElementById("profile-username-detail").textContent = username;
        document.getElementById("profile-email-detail").textContent = email;
    }

    // Apply the saved theme on load
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        changeTheme(savedTheme);  // Apply theme directly instead of passing event.
    } else {
        changeTheme("light"); // Default to light theme if nothing is saved.
    }
};

// Logout function
function logout() {
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("username");
    localStorage.removeItem("email");
    window.location.href = "login.html"; // Redirect to login page
}

// Toggle Settings section visibility
function toggleSettings() {
    const settings = document.getElementById("settings");
    const notifications = document.getElementById("notifications");

    if (settings.style.display === "none") {
        settings.style.display = "block";
        notifications.style.display = "none";
    } else {
        settings.style.display = "none";
    }
}

// Toggle Notifications section visibility
function toggleNotifications() {
    const notifications = document.getElementById("notifications");
    const settings = document.getElementById("settings");

    if (notifications.style.display === "none") {
        notifications.style.display = "block";
        settings.style.display = "none";
    } else {
        notifications.style.display = "none";
    }
}

// Change the theme of the profile container
function changeTheme(theme) {
    const profileContainer = document.getElementById("profile-container");
    const profileHeader = document.querySelector(".profile-header");
    const profileItems = document.querySelectorAll(".profile-item");
    const optionBtn = document.querySelectorAll(".option-btn");
    const h4 = document.querySelectorAll("h4");
    const labels = document.querySelectorAll(".profile-label");

    if (theme === "dark") {
        // Dark Theme: Background dark, text light
        profileContainer.style.background = "rgba(30, 30, 30, 0.8)";
        profileHeader.style.color = "#F3CA52"; // Light text for header
        profileItems.forEach(item => item.style.color = "#F3CA52"); // Light text for profile items
        optionBtn.forEach(btn => btn.style.backgroundColor = "#7ABA78"); // Option button color for dark
        h4.forEach(element => element.style.color = "#F3CA52"); // Light text for headings inside options section
        labels.forEach(label => label.style.color = "#F3CA52"); // Light text for labels

        // For text input, buttons, and checkboxes (adjusted to dark theme)
        document.body.style.color = "#F3CA52"; // Light text color for body
        document.body.style.backgroundColor = "#1E1E1E"; // Dark background color for body
    } else {
        // Light Theme: Background light, text dark
        profileContainer.style.background = "rgba(255, 255, 255, 0.8)";
        profileHeader.style.color = "#0A6847"; // Dark text for header
        profileItems.forEach(item => item.style.color = "#0A6847"); // Dark text for profile items
        optionBtn.forEach(btn => btn.style.backgroundColor = "#0A6847"); // Option button color for light
        h4.forEach(element => element.style.color = "#0A6847"); // Dark text for headings inside options section
        labels.forEach(label => label.style.color = "#0A6847"); // Dark text for labels

        // For text input, buttons, and checkboxes (adjusted to light theme)
        document.body.style.color = "#0A6847"; // Dark text color for body
        document.body.style.backgroundColor = "#F9F9F9"; // Light background color for body
    }

    // Save the theme to local storage
    localStorage.setItem("theme", theme);
}


