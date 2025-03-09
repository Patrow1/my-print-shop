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
document.getElementById("loginBtn").addEventListener("click", function() {
    document.getElementById("loginForm").classList.toggle("hidden");
});

// Funkcja do szyfrowania hasła SHA-256
async function sha256(text) {
    const encoder = new TextEncoder();
    const data = encoder.encode(text);
    const hash = await crypto.subtle.digest("SHA-256", data);
    return Array.from(new Uint8Array(hash))
        .map(byte => byte.toString(16).padStart(2, "0"))
        .join("");
}

async function loginUser() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (!email || !password) {
        alert("Wypełnij wszystkie pola!");
        return;
    }

    // Hashowanie hasła przed porównaniem
    let hashedPassword = await sha256(password);

    // Pobranie listy użytkowników
    fetch("users.json")
        .then(response => response.json())
        .then(users => {
            const user = users.find(user => user.email === email && user.password === hashedPassword);
            if (user) {
                alert("Zalogowano pomyślnie!");
            } else {
                alert("Błędny e-mail lub hasło!");
            }
        })
        .catch(error => console.error("Błąd wczytywania użytkowników:", error));
}


