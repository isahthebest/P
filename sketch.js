//The setup function only happens once

var johnny=0;

function setup() {
	createCanvas(500, 500); //create a 500px X 500px canvas
}

//The draw function happens over and over again
function draw() {
  background(250,mouseX,300); //red
  //circle
  stroke(170,255,230); // an RGB color for the circle's border
  strokeWeight(2);
  fill(300,250,200); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  ellipse(mouseX,mouseY,100,50); // center of canvas, 20px dia 
  fill(51,255,224);
  strokeWeight(0);
  rect(mouseX,mouseY,johnny,johnny);
  johnny=johnny+1;
  strokeWeight(3);
  stroke(0);
line(75,75,400,mouseX);
}


//function mousePressed() {
//if (johnny>=100;){
//  johnny=0;
//}else{
//   johnny=johnny+2
//}
//}
 