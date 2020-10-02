var movingRect;
var gameObject1,gameObject2,gameObject3,gameObject4;

function setup() {
  createCanvas(1200,800);
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  gameObject1 = createSprite(100,100,50,50);
  gameObject1.shapeColor = "green";
  gameObject2 = createSprite(200,100,50,50);  
  gameObject2.shapeColor = "green";
  gameObject3 = createSprite(300,100,50,50);
  gameObject3.shapeColor = "green";
  gameObject4 = createSprite(400,100,50,50);
  gameObject4.shapeColor = "green";

}

function draw() {

  background(0,0,0); 

  movingRect.y = World.mouseY;
  movingRect.x = World.mouseX;
  
  if(isTouching(movingRect,gameObject1)){
  movingRect.shapeColor = "red";
  gameObject1.shapeColor = "red";
  }
  else{
    movingRect.shapeColor = "green";
    gameObject1.shapeColor = "green";
  }

  if(isTouching1(movingRect,gameObject2)){
    movingRect.shapeColor = "red";
    gameObject2.shapeColor = "red";
  }
  else{
    movingRect.shapeColor = "green";
    gameObject2.shapeColor = "green";
  }

  if(isTouching2(movingRect,gameObject3)){
    movingRect.shapeColor = "red";
    gameObject3.shapeColor = "red";
  }
  else{
    movingRect.shapeColor = "green";
    gameObject3.shapeColor = "green";
  }

  if(isTouching3(movingRect,gameObject4)){
    movingRect.shapeColor = "red";
    gameObject4.shapeColor = "red";
  }
  else{
    movingRect.shapeColor = "green";
    gameObject4.shapeColor = "green";
  }

  drawSprites();
}

function isTouching(object1,object2){
  if(object1.x - object2.x < object2.width/2 + object1.width/2 &&
    object2.x - object1.x < object2.width/2 + object1.width/2 &&
    object1.y - object2.y < object2.height/2 +object1.height/2 &&
    object2.y - object1.y < object2.height/2 + object1.height/2) {
      return true;
     }
     else{
     return false;
   }
}

function isTouching1(object1,object2){
  if(object1.x - object2.x < object2.width/2 + object1.width/2 &&
    object2.x - object1.x < object2.width/2 + object1.width/2 &&
    object1.y - object2.y < object2.height/2 +object1.height/2 &&
    object2.y - object1.y < object2.height/2 + object1.height/2) {
      return true;
     }
     else{
     return false;
   }
}

function isTouching2(object1,object2){
  if(object1.x - object2.x < object2.width/2 + object1.width/2 &&
    object2.x - object1.x < object2.width/2 + object1.width/2 &&
    object1.y - object2.y < object2.height/2 +object1.height/2 &&
    object2.y - object1.y < object2.height/2 + object1.height/2) {
      return true;
     }
     else{
     return false;
   }
}

function isTouching3(object1,object2){
  if(object1.x - object2.x < object2.width/2 + object1.width/2 &&
    object2.x - object1.x < object2.width/2 + object1.width/2 &&
    object1.y - object2.y < object2.height/2 +object1.height/2 &&
    object2.y - object1.y < object2.height/2 + object1.height/2) {
      return true;
     }
     else{
     return false;
   }
}