//variáveis
let xbolinha=300;
let ybolinha=200;
let dimensão=20;
let velxbolinha=4;
let velybolinha=4;
let xraquete=5;
let yraquete=150;
let w=10;
let h=100;
let raio=(dimensão/2);
let colisao=false;
let pontosMeus=0;
let pontosoponente=0;

//variáveis do oponente
let xraquete2=585;
let yraquete2=150;
let velxaquete2;
let velyraquete2;
let chancedeerrar=0.05;

// define dimensões da tela
function setup() {
  createCanvas(600, 400);
}

//tudo que vai aparecer na tela
function draw() {
  background(0);
  mostrarbolinha();
  movimentarbolinha();
  verificarcolisao();
  mostrarraquete(xraquete,yraquete);
  movimentarraquete();
  mostrarraquete(xraquete2,yraquete2);
  movimentarraquete2();
  colisaominharaquetebiblioteca(xraquete,yraquete);
  colisaominharaquetebiblioteca(xraquete2,yraquete2);
  incluirplacar();
  marcarponto();
  
  
}
  //mostrar bolinha
  function mostrarbolinha(){
    circle(xbolinha, ybolinha,dimensão);
    describe('white circle with black outline in mid of gray canvas');
  }
  
  //movendo bolinha
  function movimentarbolinha(){
  xbolinha+=velxbolinha;
  ybolinha+=velybolinha; 
  }
  
  // colisão da bolinha com as bordas
  function verificarcolisao(){
    
    if (xbolinha + raio > width || xbolinha - raio <0){
     velxbolinha= velxbolinha*-1;
  }
   if (ybolinha + raio > height || ybolinha - raio <0) {
    velybolinha= velybolinha*-1;
  }
    
  }

  
  //mostrar raquete
  function mostrarraquete(x,y){
    rect(x,y, w, h);
describe('white rect with black outline in mid-right of canvas');
    
  }
   
  // movimentar raquete
  function movimentarraquete(){
    if (keyIsDown(UP_ARROW)){
      yraquete+=-10;
    }
    if (keyIsDown(DOWN_ARROW)){
      yraquete+=10;
    }
    
  }

//colisão raquete com a bolinha
function colisaominharaquetebiblioteca(x,y){
    colisao = 
      collideRectCircle(x, y, w, h, xbolinha, ybolinha, raio);
  
  if(colisao){
    velxbolinha *= -1;
  }
}

//movimentar raquete do oponente

 function movimentarraquete2(){
    velyraquete2= velybolinha; 
  
   if (xbolinha > width / 2 && velxbolinha > 0){
     
     //chance de erro da raquete do oponente
   if (random() < chancedeerrar){
      velyraquete2*=-1;
    }
   }
  yraquete2+=velyraquete2 
 }
 
//função incluir placar
function incluirplacar(){
  fill(255);
  text(pontosMeus, 278,26);
  text(pontosoponente,300,26);
}

//função marcar pontuação
function marcarponto(){
  
  if (xbolinha>590){
    pontosMeus+=1;
  }
  if (xbolinha<10){
      pontosoponente+=1;  
      }
}
