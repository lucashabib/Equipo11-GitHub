document.addEventListener("DOMContentLoaded", function() {
    var form = document.querySelector('.register');
    var inputEmail = document.querySelector('#email');
    var inputCheckbox = document.querySelector('#confirmar');
    var errorMessagesDiv = document.querySelector('#errorMessages');
    var mensajeExito = document.querySelector('#mensajeExito');
    var mensajesErrores = {
        email: "Por favor escriba su email.",
        checkbox: "Por favor acepte el campo Quiero recuperar mi contraseña."
    };

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        let errorMessagesHTML = '';
        let valido = true;

        if (inputEmail.value.trim() === '') {
            errorMessagesHTML += `<div>${mensajesErrores.email}</div>`;
            valido = false;
        }

        if (!inputCheckbox.checked) {
            errorMessagesHTML += `<div>${mensajesErrores.checkbox}</div>`;
            valido = false;
        }

        if (valido) {
            mensajeExito.textContent = "Recibirás un email con las instrucciones para recuperar tu contraseña.";
            mensajeExito.style.display = 'block';
            form.style.display = 'none';
        }

        errorMessagesDiv.innerHTML = errorMessagesHTML;
    });
});
