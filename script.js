document.addEventListener('DOMContentLoaded', function() {
    const registrationForm = document.getElementById('register-form');
    const mainPageContent = document.getElementById('main-page-content');
    const sectionButtons = document.querySelectorAll('.section-button');
    const sectionContents = document.querySelectorAll('.section-content');
    const backButtons = document.querySelectorAll('.back-button');
    const registrationDiv = document.getElementById('registration-form');
    const loginDiv = document.getElementById('login-form');
    const loginForm = document.getElementById('login-form');
    const showRegisterLink = document.getElementById('show-register');

    // Simulación de estado de registro (en memoria)
    let isRegistered = false;

    // Evento para el registro
    registrationForm.addEventListener('submit', function(event) {
        event.preventDefault();
        // Aquí deberías tener tu lógica de registro (simulada o real)
        isRegistered = true;
        registrationDiv.style.display = 'none'; // Ocultar el formulario de registro
        mainPageContent.style.display = 'block'; // Mostrar el contenido principal
    });

    // Eventos para mostrar/ocultar secciones
    sectionButtons.forEach(button => {
        button.addEventListener('click', function() {
            const sectionId = this.dataset.section;
            sectionContents.forEach(content => {
                content.style.display = 'none'; // Ocultar todas las secciones
            });
            const selectedSection = document.getElementById(sectionId);
            if (selectedSection) {
                selectedSection.style.display = 'block'; // Mostrar la sección ক্লিকada
            }
            mainPageContent.style.display = 'none'; // Ocultar los botones de sección
        });
    });

    // Eventos para el botón de regreso
    backButtons.forEach(button => {
        button.addEventListener('click', function() {
            sectionContents.forEach(content => {
                content.style.display = 'none'; // Ocultar todas las secciones
            });
            mainPageContent.style.display = 'block'; // Mostrar los botones de sección
        });
    });

    // Lógica para mostrar el formulario de inicio de sesión (si lo necesitas)
    if (showRegisterLink) {
        showRegisterLink.addEventListener('click', function(event) {
            event.preventDefault();
            registrationDiv.style.display = 'block';
            loginDiv.style.display = 'none';
        });
    }
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            // Aquí tu lógica de inicio de sesión
            mainPageContent.style.display = 'block';
            loginDiv.style.display = 'none';
            registrationDiv.style.display = 'none';
        });
    }

    // Al cargar la página, mostrar solo el formulario de registro
    mainPageContent.style.display = 'none';
    loginDiv.style.display = 'none';
    registrationDiv.style.display = 'block';
});