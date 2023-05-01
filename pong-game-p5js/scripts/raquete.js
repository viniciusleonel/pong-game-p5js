// variaveis da raquete
let xRaquete = 15;
let yRaquete = 150;
let comprimentoRaquete = 10;
let alturaRaquete = 90;

// variaveis do oponente
let xRaquete2 = 975;
let yRaquete2 = 150;

function mostrarRaquete (x, y){
    rect(x, y , comprimentoRaquete, alturaRaquete)
  }
  
function movimentaMinhaRaquete(){
    if (keyIsDown(83)){
        yRaquete += dificuldade;
    }
    if (keyIsDown(87)){
        yRaquete -= dificuldade;
    }
    if (keyIsDown(DOWN_ARROW)){
        yRaquete += dificuldade;
    }
    if (keyIsDown(UP_ARROW)){
        yRaquete -= dificuldade;
    }
}
  
function   verificaColisaoRaquete(){
    if (xBolinha - raio < xRaquete + comprimentoRaquete && yBolinha - raio < yRaquete + alturaRaquete && yBolinha + raio > yRaquete){
        velocidadeXBolinha *= -1;
        raquetada.play();
        hit++;
    }
}
  
function   verificaColisaoRaquete2(){
    if (xBolinha + raio > xRaquete2 && yBolinha < yRaquete2 + alturaRaquete && yBolinha > yRaquete2) {    
        velocidadeXBolinha *= -1;
        raquetada.play();
    }  
}
  
function movimentarRaquete2(){
    velocidadeYRaquete = yBolinha - yRaquete2 - comprimentoRaquete / 2 - erro;
    yRaquete2 += velocidadeYRaquete + chanceDeErrar;
    calculaChanceDeErrar();
}
  
function movimentaRaquete2Multiplayer(){
    if (keyIsDown(98)){
    yRaquete2 += dificuldade;
    }
    if (keyIsDown(104)){
        yRaquete2 -= dificuldade;
    }
}  
