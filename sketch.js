let imagemDaEstrada;
let ator;
let carro;
let xCarro = 550;
let xAtor = 20;
let yAtor = 365;

function preload(){
  imagemDaEstrada = loadImage ("imagens/estrada.png");
  ator = loadImage ("imagens/ator-1.png");
  carro = loadImage ("imagens/carro-1.png");
}

function setup() {
  createCanvas(600, 400);
  
}

function draw() {
  background(imagemDaEstrada);
  image (ator, xAtor, yAtor, 30, 30);
  image (carro, xCarro, 40, 40, 40)
  moveCarro()
  moveVaca()
}

function moveCarro(){
  xCarro -=5
}

function moveVaca(){
  if (keyIsDown(UP_ARROW)){
    yAtor -= 5
  }
  if(keyIsDown(DOWN_ARROW)){
    yAtor += 5
  }
}
