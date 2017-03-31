var mic;
var micLevel = mic.getLevel();
var inputsize = (micLevel * 900);



function setup() {
    createCanvas(windowWidth,windowHeight)
      mic = new p5.AudioIn()
      mic.start();
}

function draw() {

var micLevel = mic.getLevel();
var inputsize = (micLevel * 2000);


  
  var micLevel = mic.getLevel();
  textSize(inputsize);
  fill(random(0,255),random(0,255),random(0,255));
  text("WHY?",mouseX,mouseY);
  

}

function mouseClicked(){
  background(255);
  
}
