
function setup() {
  createCanvas(600, 400);
  trilha.loop();
  
}

function draw() {
  background(imagemDaEstrada); 
  moveCarro();
  moveVaca();
  mostrarCarro();
  mostrarAtor();
  voltaCarro();
  verificaColisao();
  mostrarPontos();
  marcaPonto();
}




