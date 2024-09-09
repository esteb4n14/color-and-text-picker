// Obtener referencia al canvas y su contexto
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// Variables de color iniciales
let rectColor = "#000000"; // Color inicial del rectángulo (negro)
let textColor = "#FFFFFF"; // Color inicial del texto (blanco)

// Función para dibujar el rectángulo y el texto
function drawRectangle(rectColor, textColor) {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpiar el canvas
    ctx.fillStyle = rectColor;
    ctx.fillRect(100, 50, 500, 250); // Dibujar rectángulo

    // Dibujar texto en el centro del rectángulo
    ctx.font = "bold 46px Arial";
    ctx.fillStyle = textColor; // Color del texto
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("Test", canvas.width / 2, canvas.height / 2);
}

// Dibujar el rectángulo y texto por primera vez
drawRectangle(rectColor, textColor);

// Función para limpiar y validar el color ingresado
function cleanColorInput(color) {
    // Si no tiene #, lo agregamos
    if (!color.startsWith("#")) {
        color = "#" + color;
    }
    // Validar que tenga 7 caracteres (# + 6 dígitos hexadecimales)
    if (/^#[0-9A-F]{6}$/i.test(color)) {
        return color;
    } else {
        return null; // Retornamos null si el color no es válido
    }
}

// Actualizar el color del rectángulo cuando se cambia el input de color del rectángulo
document.getElementById('rectColorInput').addEventListener('input', function() {
    let color = cleanColorInput(this.value);
    if (color) { // Si es válido, actualizamos
        rectColor = color;
        document.getElementById('rectColorPicker').value = color; // Sincronizar con el picker
        drawRectangle(rectColor, textColor);
    }
});

// Actualizar el color del texto cuando se cambia el input de color del texto
document.getElementById('textColorInput').addEventListener('input', function() {
    let color = cleanColorInput(this.value);
    if (color) { // Si es válido, actualizamos
        textColor = color;
        document.getElementById('textColorPicker').value = color; // Sincronizar con el picker
        drawRectangle(rectColor, textColor);
    }
});

// Actualizar el input de texto cuando se cambia el selector de color del rectángulo
document.getElementById('rectColorPicker').addEventListener('input', function() {
    rectColor = this.value;
    document.getElementById('rectColorInput').value = this.value; // Sincronizar con el input de texto
    drawRectangle(rectColor, textColor);
});

// Actualizar el input de texto cuando se cambia el selector de color del texto
document.getElementById('textColorPicker').addEventListener('input', function() {
    textColor = this.value;
    document.getElementById('textColorInput').value = this.value; // Sincronizar con el input de texto
    drawRectangle(rectColor, textColor);
});