// Define the correct password for accessing the gallery
const correctPassword = "red"; // Replace with your desired password

function checkPassword() {
    const passwordInput = document.getElementById("password-input").value;
    const errorMessage = document.getElementById("error-message");

    if (passwordInput === correctPassword) {
        // Hide the password input section and show the gallery
        document.getElementById("gallery-section").style.display = "block";
        errorMessage.textContent = ""; // Clear any error message
    } else {
        errorMessage.textContent = "Incorrect password. Try again.";
    }
}
