let xAtor = 20;
let yAtor = 365;
let colisao = false;
let carroHeight = 40;
let carroWidth = 40;
let meusPontos = 0;

function mostrarAtor(){
  image (ator, xAtor, yAtor, 30, 30);
}

function moveVaca(){
  if (keyIsDown(UP_ARROW))
    yAtor -= 5

  if (keyIsDown(DOWN_ARROW) && yAtor<365)
    yAtor += 5
  }

function verificaColisao(){
  for (let i = 0; i < imagemCarros.length; i++){
  colisao = collideRectCircle(xCarro[i], yCarro[i], carroHeight, carroWidth, xAtor, yAtor, 30);
 if (colisao){
   somColisao.play()
  yAtor = 368
   if (meusPontos>0){
     meusPontos -=1
    }
   }
  }
}

function mostrarPontos(){
  fill (220,220,50)
   textSize (30)
    text(meusPontos, 50, 30)
}
  
function marcaPonto(){
    if (yAtor<30){
      somPonto.play()
      meusPontos += 1
        if (yAtor<30){
          yAtor =368
    }
  }
}