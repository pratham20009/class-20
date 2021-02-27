var fixed,moving;
function setup() {
  createCanvas(1200,600);
 fixed= createSprite(600, 200, 100, 50);
 fixed.shapeColor="green";
 fixed.debug=true;

 moving=createSprite(200,400,50,100);
 moving.shapeColor="green";
 moving.debug=true;
}

function draw() {
  background(0);  
  moving.y=mouseY;
  moving.x=mouseX;
  if(moving.x-fixed.x<=moving.width/2+fixed.width/2 &&
    fixed.x-moving.x<=moving.width/2+fixed.width/2 &&
    moving.y-fixed.y<=moving.height/2+fixed.height/2 &&
    fixed.y-moving.y<=moving.height/2+fixed.height/2 
    ){
    moving.shapeColor="red";
    fixed.shapeColor="red";
  }
  else{
    moving.shapeColor="green";
    fixed.shapeColor="green";
  }

  drawSprites();
}