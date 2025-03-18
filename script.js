// Dark Mode Toggle Script
const darkModeToggle = document.getElementById("darkModeToggle");

// Check if dark mode is already enabled in localStorage
if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark-mode");
}

// Toggle Dark Mode on Button Click
darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    
    // Store user preference in localStorage
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("darkMode", "enabled");
    } else {
        localStorage.setItem("darkMode", "disabled");
    }
});

// Subscribe Form Script
const subscribeButton = document.getElementById("subscribeButton");

subscribeButton.addEventListener("click", () => {
    const email = document.getElementById("subscribeEmail").value;
    if (email) {
        alert(`Thank you for subscribing with ${email}`);
        // Here you can add functionality to send the email to your server
    } else {
        alert("Please enter a valid email address.");
    }
});

// Menu Button Toggle Script
const menuButton = document.getElementById("menuButton");
const menuBar = document.getElementById("menuBar");

menuButton.addEventListener("click", () => {
    menuBar.style.display = menuBar.style.display === "none" ? "block" : "none";
});