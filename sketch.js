var distance = 0;
let img1;
let img2;

function preload() {
  img1 = loadImage('arrow1.png');
  img2 = loadImage('arrow2.png');
}


function setup() {
  createCanvas(412, 869);
}

function draw() {
  //print(distance) ;
  
  if(distance < 100) {
    drawtemplate();
    text(distance, 206, 300);
    text("cm", 206, 340);
  }
  
  if( 100 <= distance && distance < 100000 ){
    drawtemplate();
    text(distance / 100, 206, 300);
    text("m", 206, 340);
  }
  
  if( 100000 <= distance){
    drawtemplate();
    text(distance / 100000, 206, 300);
    text("km", 206, 340);
  }
  
  
}

function mouseWheel(event) {
 // print(event.delta);
  
  distance += 1;
}

function drawtemplate(){
  background('#203060');
    textSize(22);
  fill('#F8C0D8');
  textAlign(CENTER);
  text('If this was the Sun', 206, 60);
  text('.', 206, 160);
  text('Scroll down to the closest star', 206, 250);
  // add arrow 2
  image(img1, 170, 90, 50, 50);
    image(img2, 50, 300, 50, 100);

}