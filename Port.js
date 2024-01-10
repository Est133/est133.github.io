document.addEventListener('DOMContentLoaded', function() {
    // Agrega un evento de clic al botón con el id "changeHeaderColorBtn"
    document.getElementById('changeHeaderColorBtn').addEventListener('click', function() {
        // Cambia el color de fondo del encabezado a un color aleatorio
        const randomColor = getRandomColor();
        document.getElementById('mainheader').style.backgroundColor = randomColor;
    });
});

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
