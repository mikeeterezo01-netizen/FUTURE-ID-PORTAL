// ==========================================
// 1. REGISTER FORM SUBMIT ACTION
// ==========================================
document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    const username = document.getElementById("regUsername").value.trim();
    const email = document.getElementById("regEmail").value.trim();
    const password = document.getElementById("regPassword").value.trim();
    const confirmPassword = document.getElementById("confirmPassword").value.trim();
    const message = document.getElementById("regMessage");
    
    const submitButton = event.target.querySelector("button[type='submit']");

    // Rule 1: Password length check
    if (password.length < 6) {
        message.style.color = "red";
        message.textContent = "Password must be at least 6 characters long.";
        return; 
    }

    // Rule 2: Password matching check
    if (password !== confirmPassword) {
        message.style.color = "red";
        message.textContent = "Passwords do not match!";
        return; 
    }

    // Isara ang button para ISANG CLICK LANG talaga
    submitButton.disabled = true;
    submitButton.textContent = "Processing..."; 
    submitButton.style.opacity = "0.6"; 
    submitButton.style.cursor = "not-allowed";

    // I-save ang account details sa localStorage ng browser
    localStorage.setItem("savedUsername", username);
    localStorage.setItem("savedPassword", password);

    // Ipakita ang success message
    message.style.color = "green";
    message.textContent = `Account created successfully for ${username}! Redirecting to login...`;
    
    document.getElementById("registerForm").reset();

    // INAYOS NA: Ngayon ay dederetso na ito sa login.html mo!
    setTimeout(function() {
        window.location.href = "login.html";
    }, 2000); 
});

// ==========================================
// 2. REVEAL / HIDE FOR REGISTER PASSWORD
// ==========================================
const regPassword = document.getElementById("regPassword");
const toggleRegBtn = document.getElementById("toggleRegPassword");

toggleRegBtn.addEventListener("click", function() {
    if (regPassword.type === "password") {
        regPassword.type = "text";
        toggleRegBtn.textContent = "Hide";
    } else {
        regPassword.type = "password";
        toggleRegBtn.textContent = "Show";
    }
});

// ==========================================
// 3. REVEAL / HIDE FOR CONFIRM PASSWORD
// ==========================================
const confirmPassword = document.getElementById("confirmPassword");
const toggleConfirmBtn = document.getElementById("toggleConfirmPassword");

toggleConfirmBtn.addEventListener("click", function() {
    if (confirmPassword.type === "password") {
        confirmPassword.type = "text";
        toggleConfirmBtn.textContent = "Hide";
    } else {
        confirmPassword.type = "password";
        toggleConfirmBtn.textContent = "Show";
    }
});