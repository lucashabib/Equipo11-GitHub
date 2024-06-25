document.addEventListener('DOMContentLoaded', function() {
    const registroForm = document.getElementById('registroForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirm-password');
    const termsCheckbox = document.getElementById('termsCheckbox');
    const errorContainer = document.getElementById('errorContainer'); 

    registroForm.addEventListener('submit', function(event) {
        event.preventDefault(); 

        let error = '';

        if (nameInput.value === '') {
            error = 'Por favor complete el campo de Nombre y Apellido.';
        }

        else if (emailInput.value === '') {
            error = 'Por favor complete el campo de email.';
        }

        else if (passwordInput.value === '') {
            error = 'Por favor complete el campo de contraseña.';
        }

        else if (passwordInput.value.length < 6) {
            error = 'La contraseña debe tener al menos 6 caracteres.';
        }

        else if (passwordInput.value !== confirmPasswordInput.value) {
            error = 'Las contraseñas no coinciden.';
        }

        else if (!termsCheckbox.checked) {
            error = 'Debe aceptar los términos y condiciones.';
        }

        if (error) {
            errorContainer.textContent = error; 
            errorContainer.style.display = 'block'; 
            return;
        }

        errorContainer.textContent = ''; 
        window.location.href = 'login.html';
    });
});