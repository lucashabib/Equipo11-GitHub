document.addEventListener('DOMContentLoaded', function () {
    const userEmail = localStorage.getItem('email');

    const userInfoDiv = document.querySelector('.registro');

    const loginLink = document.querySelector('.login-link');
    const registerLink = document.querySelector('.register-link');

    if (userEmail) {
        userInfoDiv.innerHTML = `<p class="saludo">Bienvenido, ${userEmail} <a href="#" id="logout-link">LOGOUT</a></p>`;
        if (loginLink) loginLink.style.display = 'none';
        if (registerLink) registerLink.style.display = 'none';

        document.getElementById('logout-link').addEventListener('click', function () {
            localStorage.removeItem('email');
            location.reload();
        });
    } else {
        if (loginLink) loginLink.style.display = 'block';
        if (registerLink) registerLink.style.display = 'block';
    }
});