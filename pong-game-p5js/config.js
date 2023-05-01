// dificuldade
let facil = 6;
let medio = 3;
let dificil = 2;
let dificuldade = medio;

let xCanvas = 1000;
let yCanvas = 600;

let chanceDeErrar = 1;
let erro = 60;
let hit = 0;

function calculaChanceDeErrar() {
    if (hit > 4){
      hit = 0;
    }   
    if (pontosDoOponente >= meusPontos) {
      chanceDeErrar += 1;
      if (chanceDeErrar > 39){
      chanceDeErrar = 40
      }
      if (pontosDoOponente - meusPontos >= 2 || hit > 3){
        erro = 35;
      } else{
        erro = 60;
      }
    } else {
      chanceDeErrar -= 1
      if (chanceDeErrar < 35){
      chanceDeErrar = 35
      }    
    }
  }
  