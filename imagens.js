let imagemDaEstrada;
let ator;
let carro;
let carro2;
let carro3;
let somColisao;
let somPonto;
let trilha;

function preload(){
  imagemDaEstrada = loadImage ("imagens/estrada.png");
  ator = loadImage ("imagens/ator-1.png");
  carro = loadImage ("imagens/carro-1.png");
  carro2 = loadImage ("imagens/carro-2.png");
  carro3 = loadImage ("imagens/carro-3.png");
  imagemCarros = [carro, carro2, carro3, carro, carro2, carro3];


 somColisao = loadSound ("sons/colidiu.mp3");
  somPonto = loadSound ("sons/pontos.wav");
  trilha = loadSound ("sons/trilha.mp3");
}