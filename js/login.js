document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username === '') {
        alert('Por favor complete el campo email');
        return;
    }

    if (password === '') {
        alert('Por favor complete el campo contraseña');
        return;
    }

    if (password.length < 6) {
        alert('La contraseña debe tener al menos 6 caracteres');
        return;
    }

    localStorage.setItem('email', username);
    window.location.href = 'index.html';
});