document.addEventListener('DOMContentLoaded', function() {
    const logoutButton = document.getElementById('logout-link');
    const loginLink = document.querySelector('.login-link');
    const registerLink = document.querySelector('.register-link');
    const logoutMenuButton = document.querySelector('.logout-menu-button');

    if (logoutButton) {
        logoutButton.addEventListener('click', function(event) {
            event.preventDefault();

            localStorage.removeItem('email');

            const welcomeMessage = document.querySelector('.saludo');
            if (welcomeMessage) {
                welcomeMessage.style.display = 'none';
            }
            
            if (loginLink) loginLink.style.display = 'block';
            if (registerLink) registerLink.style.display = 'block';

        });
    }
});
