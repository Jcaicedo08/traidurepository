// Datos de usuarios directamente en el script
const users = [
    { username: "admin", password: "tradu123" },
    { username: "JuanC", password: "Juan123" },
    { username: "JulianB", password: "Julian123"}
];

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    let authenticated = false;
    
    for(let user of users) {
    if(user.username === username && user.password === password) {
        authenticated = true;
        break;
    }
    }
    
    if(authenticated) {
    // Ocultar popup y mostrar contenido
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('loginPopup').style.display = 'none';
    document.getElementById('mainContent').style.display = 'block';
    
    // Guardar estado de sesión
    sessionStorage.setItem('authenticated', 'true');
    } else {
    document.getElementById('errorMsg').textContent = 'Usuario o contraseña incorrectos';
    }
});

// Verificar si ya está autenticado al cargar la página
window.onload = function() {
    if(sessionStorage.getItem('authenticated') === 'true') {
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('loginPopup').style.display = 'none';
    document.getElementById('mainContent').style.display = 'block';
    }
};