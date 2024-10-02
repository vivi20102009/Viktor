function setup() {
  createCanvas(400, 400);
    background("rgb(197,14,76)");

    
 stroke('black');
 fill ('rgb(60,58,58)') ; 
  
  console.log(mouseIsPressed)
}
function draw() {

  if (mouseIsPressed) {
 rect(mouseX,mouseY,50,50); 
   }
}
