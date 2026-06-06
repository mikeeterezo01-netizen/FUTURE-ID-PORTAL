// ==========================================
// 1. LOGIN FORM SUBMIT ACTION
// ==========================================
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Pigilan ang pag-refresh ng page

    // Kuhanin ang tinype ng user
    const usernameInput = document.getElementById("username").value.trim();
    const passwordInput = document.getElementById("password").value.trim();
    const messageDisplay = document.getElementById("message");

    // Kuhanin ang totoong account mula sa browser memory
    const storedUsername = localStorage.getItem("savedUsername");
    const storedPassword = localStorage.getItem("savedPassword");

    // TINGNAN KUNG TAMA ANG ACCOUNT MULA SA SIGN UP
    if (storedUsername && usernameInput === storedUsername.trim() && passwordInput === storedPassword.trim()) {
        messageDisplay.style.color = "green";
        messageDisplay.textContent = "Login Successful! Redirecting to dashboard";
    
        setTimeout(function() {
            window.location.href = "dashboard.html";
        }, 1000);
    } 
    // BACKUP ADMIN ACCOUNT (Kung gusto mo mag-test gamit ang admin)
    else if (usernameInput === "admin" && passwordInput === "password123") {
        messageDisplay.style.color = "green";
        messageDisplay.textContent = "Login Successful! Redirecting to dashboard";
    
    localStorage.setItem("savedUsername", "Admin");

    setTimeout(function() {
        window.location.href = "dashboard.html";
    }, 1000);

} 
    // KUNG MALI ANG LAHAT
    else {
        messageDisplay.style.color = "red";
        messageDisplay.textContent = "Invalid username or password.";
    }
});

// ==========================================
// 2. PASSWORD REVEAL / HIDE LOGIC (Naka-hiwalay dapat!)
// ==========================================
const passwordField = document.getElementById("password");
const toggleBtn = document.getElementById("togglePassword");

// FIX: Ginamit natin ang 'toggleBtn' dahil ito ang dineclare mo sa taas
toggleBtn.addEventListener("click", function() {
    if (passwordField.type === "password") {
        passwordField.type = "text";
        toggleBtn.textContent = "Hide";
    } else {
        passwordField.type = "password";
        toggleBtn.textContent = "Show";
    }
});