function showMessage() {
    alert("Dziękujemy za odwiedziny naszej drukarni!");
}
document.getElementById("loginBtn").addEventListener("click", function() {
    document.getElementById("registerForm").classList.toggle("hidden");
});

function registerUser() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    
    if (email && password) {
        alert("Rejestracja zakończona!");
    } else {
        alert("Wypełnij wszystkie pola!");
    }
}
