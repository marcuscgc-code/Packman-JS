// Acessando o canvas e configurando o contexto
const canvas = document.getElementById("canvas");
const canvasContext = canvas.getContext("2d");

// Acessando as imagens
const pacmanFrames = document.getElementById("animation");
const ghostFrames = document.getElementById("ghosts");

// Definindo algumas variáveis globais
let fps = 30;
let oneBlockSize = 20;
let wallColor = "#342CDA";
let pacmanX = 1 * oneBlockSize; // Posição inicial de Pacman
let pacmanY = 1 * oneBlockSize; // Posição inicial de Pacman

// Função para criar retângulos no canvas
let createRect = (x, y, width, height, color) => {
    canvasContext.fillStyle = color;
    canvasContext.fillRect(x, y, width, height);
};

// Mapa do jogo (1 = parede, 2 = caminho)
let map = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
    [1, 2, 1, 1, 1, 2, 1, 1, 1, 2, 1, 2, 1, 1, 1, 2, 1, 1, 1, 2, 1],
    [1, 2, 1, 1, 1, 2, 1, 1, 1, 2, 1, 2, 1, 1, 1, 2, 1, 1, 1, 2, 1],
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
    [1, 2, 1, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 1, 2, 1],
    [1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1],
    [1, 1, 1, 1, 1, 2, 1, 1, 1, 2, 1, 2, 1, 1, 1, 2, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 2, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1],
    [2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2],
    [1, 1, 1, 1, 1, 2, 1, 2, 1, 2, 2, 2, 1, 2, 1, 2, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 1, 2, 1, 2, 1, 1, 1, 1, 1, 2, 1, 2, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 2, 2, 2, 1, 1, 1, 1, 1, 2, 2, 2, 1, 1, 1, 1, 1],
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
    [1, 2, 1, 1, 1, 2, 1, 1, 1, 2, 1, 2, 1, 1, 1, 2, 1, 1, 1, 2, 1],
    [1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1],
    [1, 1, 2, 2, 1, 2, 1, 2, 1, 1, 1, 1, 1, 2, 1, 2, 1, 2, 2, 1, 1],
    [1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1],
    [1, 2, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 2, 1],
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];

// Função principal do loop do jogo
let gameLoop = () => {
    update();
    draw();
};

// Atualizações no estado do jogo
let update = () => {
    // Futuras atualizações, como movimento de Pacman e fantasmas
};

// Função para desenhar o estado atual do jogo
let draw = () => {
    // Limpa o canvas com um fundo preto
    createRect(0, 0, canvas.width, canvas.height, "black");

    // Desenha as paredes
    drawWalls();

    // Desenha Pacman
    drawPacman();

    // Desenha fantasmas (exemplo para um fantasma estático, pode ser atualizado depois)
    drawGhosts();
};

// Intervalo do loop do jogo (taxa de frames por segundo)
let gameInterval = setInterval(gameLoop, 1000 / fps);

// Função para desenhar as paredes do jogo
let drawWalls = () => {
    for (let i = 0; i < map.length; i++) {
        for (let j = 0; j < map[i].length; j++) {
            if (map[i][j] === 1) {
                createRect(j * oneBlockSize, i * oneBlockSize, oneBlockSize, oneBlockSize, wallColor);
            }
        }
    }
};

// Função para desenhar Pacman
let drawPacman = () => {
    canvasContext.drawImage(
        pacmanFrames, 
        0, 0, oneBlockSize, oneBlockSize, 
        pacmanX, pacmanY, oneBlockSize, oneBlockSize
    );
};

// Função para desenhar fantasmas (exemplo básico)
let drawGhosts = () => {
    canvasContext.drawImage(
        ghostFrames,
        0, 0, oneBlockSize, oneBlockSize,
        9 * oneBlockSize, 8 * oneBlockSize, // Posição estática de um fantasma
        oneBlockSize, oneBlockSize
    );
};

let randomTargetsForGhosts = [
    {x:1 * oneBlockSize, y : 1 * oneBlockSize}
    {x:1 * oneBlockSize, y:(map.length - 2) * 
    oneBlockSize},
    {x: (map[0].length -2)* oneBlockSize, y: oneBlockSize},
    {
        x:(map[0].length - 2) * oneBlockSize,
        y:(map.length - 2)* oneBlockSize,
    },  
];

for(let i = 0; i <map.length; i++){
const ghostFrames = document.getElementById("ghosts");
    for(let j = 0; j < map[0].length; j++){
        map[i][j] = 2;
    }
}