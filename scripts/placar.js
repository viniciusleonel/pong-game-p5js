// placar do jogo
let meusPontos = 0;
let pontosDoOponente = 0;

let marcaMeuPonto = xRaquete2 + 10;
let marcaPontoOponente = xRaquete ;

function marcaPonto(){
    if (xBolinha > marcaMeuPonto){
      meusPontos += 1;
      ponto.play();
    }
    if (xBolinha < marcaPontoOponente){
      pontosDoOponente += 1;
      ponto.play();    
    }
  }

function   incluiPlacar(){
    stroke(255);
    textAlign(CENTER)
    textSize(20)
    fill(color(255, 140, 0))
    rect(150, 10, 40, 30)
    fill(255)
    text(meusPontos, 170, 32);
    fill(color(255, 140, 0))
    rect(800, 10, 40, 30)
    fill(255)
    text(pontosDoOponente, 820, 32)
    // fill(255)
    // text(chanceDeErrar, 300, 30)
  }
  