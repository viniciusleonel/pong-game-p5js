// variaveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let dBolinha = 30;
let raio = dBolinha / 2;

// velocidades da bolinha
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

function mostrarBolinha (){
    circle(xBolinha, yBolinha, dBolinha);
  }
  
function movimentoBolinha (){
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}
  
function colisaoBordaBolinha(){
    if(xBolinha + raio > width || xBolinha - raio < 0 ){
        velocidadeXBolinha *= -1;
    } 

    if(yBolinha + raio > height || yBolinha - raio < 0){
        velocidadeYBolinha *= -1;
    }  
}

function bolinhaNaoFicaPresa(){
    if (xBolinha - raio < 0){
      xBolinha = 25
    }
    if (xBolinha + raio > xCanvas){
      xBolinha = 970
    }
}
  