document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario

    // Obtiene los valores del formulario
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    // Guarda los datos en localStorage
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);

    // Redirige a la página de aviso
    window.location.href = 'aviso.html';
});