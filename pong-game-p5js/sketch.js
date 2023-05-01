// console.log("Bem vindo ao jogo Pong!")
// console.log("Use a tecla 'W' para se mover para cima e a tecla 'S' para baixo, ou use as setas do teclado.")
// console.log("Modo Multiplayer, use as teclas '8' para cima e '2' para baixo.")

function setup() {
  createCanvas(xCanvas, yCanvas);
}

function draw() {
  background(0);
  mostrarBolinha();
  movimentoBolinha();
  colisaoBordaBolinha();
  mostrarRaquete(xRaquete, yRaquete);
  mostrarRaquete(xRaquete2, yRaquete2);
  movimentarRaquete2();
  movimentaMinhaRaquete();
  verificaColisaoRaquete();
  verificaColisaoRaquete2();
  incluiPlacar();
  marcaPonto();
  bolinhaNaoFicaPresa();
  //movimentaRaquete2Multiplayer();  
}
