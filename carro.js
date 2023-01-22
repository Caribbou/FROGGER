let xCarro = [600, 600, 600, 600, 600, 600]
let yCarro = [40, 100, 150, 200, 250, 300]
let velocidadeCarro = [4, 3, 6, 7, 4, 2]

function mostrarCarro(){
  for (let i=0; i<imagemCarros.length; i+=1)
  image (imagemCarros[i], xCarro[i], yCarro[i], 40, 40);
}

function moveCarro(){
  for (let i=0; i<imagemCarros.length; i+=1)
  xCarro [i]-= velocidadeCarro[i];
}

function voltaCarro(){
  for (let i=0;i<imagemCarros.length;i+=1)
  if (xCarro[i] < -50){
    xCarro[i] = 600
  }
}
