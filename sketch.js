//variaveis bolinha
let xBolinha =200;
let yBolinha=200;
let diametro=15;


let velocidadeXbolinha=9;
let velocidadeYbolinha=6;

//variavel minharaquete
let xRaqueteJogador = 5;
let yRaqueteJogador = 15;
let alturaRaqueteJogador = 10;
let larguraRaqueteJogador = 90;

//variavel raquete oponente
let xRaqueteOponente = 385;
let yRaqueteOponente = 15;
let alturaRaqueteOponente = 10;
let larguraRaqueteOponente = 90;




//colisao
let colidiu = false;

//
let velocidadeyOponente

function setup() {
  createCanvas(400, 400);}
  
function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  mostraRaqueteJogador();
  verificaColisao();
  movimentaRaqueteJogador();
  verificaColisaoRaqueteJogador();
  mostraRaqueteOponente();
  movimentaRaqueteOponente();
}

function mostraBolinha(){
   fill("#E91E63")
  circle(xBolinha,yBolinha,diametro);
 // if(mouseX<posicaoHorizontal)
  //  posicaoHorizontal++;
}
function movimentaBolinha(){
  xBolinha+=velocidadeXbolinha;
  yBolinha+=velocidadeYbolinha;
  
}
  
function verificaColisao(){ 
  if(xBolinha>width|| xBolinha< 0){
    velocidadeXbolinha*=-1;
    }
  if(yBolinha>height|| yBolinha< 0){
    velocidadeYbolinha*=-1;
    }
}

function mostraRaqueteJogador(){
  fill("#A031B3");
  stroke("#E91E63");
  rect(xRaqueteJogador,yRaqueteJogador,alturaRaqueteJogador,larguraRaqueteJogador);
}

function movimentaRaqueteJogador(){
 if(keyIsDown(UP_ARROW)){
  yRaqueteJogador-=10;
 }
  if(keyIsDown(DOWN_ARROW)){
  yRaqueteJogador+=10;
 }
  
  
}

function verificaColisaoRaqueteJogador(){
  colidiu = collideRectCircle( 
 xRaqueteJogador ,
 yRaqueteJogador ,
 alturaRaqueteJogador ,
 larguraRaqueteJogador ,
 xBolinha,
 yBolinha,
 diametro/2,
 );
  if (colidiu==true){
  velocidadexBolinha *= -1 ;
  
  }
}
function mostraRaqueteOponente(){
  fill("#AC23C4");
  stroke("#CC2F66");
  rect(xRaqueteOponente,yRaqueteOponente,alturaRaqueteOponente,larguraRaqueteOponente
  )
}

function movimentaRaqueteOponente(){
  velocidadeyOponente = yBolinha - yRaqueteOponente - alturaRaqueteOponente/2 -30;
  
  yRaqueteOponente+= velocidadeyOponente;
}

function verificaColisaoRaqueteOponente(){
  colidiu = collideRectCircle( 
 xRaqueteOponente ,
 yRaqueteOponente ,
 alturaRaqueteOponente ,
 larguraRaqueteOponente ,
 xBolinha,
 yBolinha,
 diametro/2,
 );
  if (colidiu==true){
  velocidadexBolinha *= -1 ;
    }
}