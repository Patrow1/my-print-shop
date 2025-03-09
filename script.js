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
[
    {
        "email": "admin@example.com",
        "password": "5e884898da28047151d0e56f8dc6292773603d0d6aabbdd53df8b705d7c7c5d3"
    }
]

