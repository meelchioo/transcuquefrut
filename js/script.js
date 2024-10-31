let cosColor;
let capColor;
let ullsColor;
let acsColor;
let supColor;
let midaPupila;
let posyUlls;

function setup() {
    // Configuración del canvas
    let canvas = createCanvas(200, 200);
    canvas.parent('p5Canvas');
    background(255);

    // Definición de colores y parámetros
    cosColor = color(66, 134, 244); // Color del cuerpo
    capColor = color(219, 207, 41); // Color de la cabeza
    ullsColor = color(255);          // Color de los ojos
    acsColor = color(219, 207, 41);  // Color de la antena
    supColor = color(100);           // Color de los brazos
    midaPupila = 4;                  // Tamaño de la pupila
    posyUlls = 65;                   // Posición vertical de los ojos
}

function draw() {
    background(255);
    drawRobot();
}

function drawRobot() {
    // Dibuja la cabeza
    fill(capColor);
    rect(75, 50, 50, 40, 10); // Cabeza con bordes redondeados

    // Dibuja la antena
    stroke(0);
    line(100, 35, 100, 20); // Línea de la antena
    fill(acsColor);
    ellipse(100, 15, 8, 8); // Bola de la antena

    // Dibuja los ojos
    drawEye(88, posyUlls, midaPupila); // Ojo izquierdo
    drawEye(112, posyUlls, midaPupila); // Ojo derecho

    // Dibuja el cuerpo
    drawBody(75, 90, 50, 60);

    // Dibuja los brazos
    drawArm(60, 100, 15, 50); // Brazo izquierdo
    drawArm(125, 100, 15, 50); // Brazo derecho

    // Dibuja las ruedas en la base del cuerpo
    drawWheel(85, 160, 15); // Rueda izquierda
    drawWheel(110, 160, 15); // Rueda derecha
}

// Función para dibujar el cuerpo del robot
function drawBody(x, y, width, height) {
    fill(cosColor);
    rect(x, y, width, height, 10); // Cuerpo
    fill(175, 100, 220);
    rect(x, y, width, 10); // Detalle superior del cuerpo
    fill("blue");
    rect(x, y + height - 10, width, 10); // Cinturón
}

// Función para dibujar los ojos del robot
function drawEye(x, y, pupilSize) {
    fill(ullsColor);
    ellipse(x, y, 12, 12); // Ojo
    fill(0);
    ellipse(x, y, pupilSize, pupilSize); // Pupila
}

// Función para dibujar los brazos del robot
function drawArm(x, y, width, height) {
    fill(supColor);
    rect(x, y, width, height, 5); // Brazo
}

// Función para dibujar las ruedas del robot
function drawWheel(x, y, diameter) {
    fill(20);
    ellipse(x, y, diameter, diameter); // Rueda
}
