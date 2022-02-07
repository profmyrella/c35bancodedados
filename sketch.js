var ball


function setup(){
  createCanvas(500,500);

  ball = createSprite(250,250,10,10);
  ball.shapeColor = "red";


 
}

function draw(){
  background("white");
  
    if(keyDown(LEFT_ARROW)){
      writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
      writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
      writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
      writePosition(0,+1);
    }
    drawSprites();
  
}

function writePosition(x,y){
  ball.x = ball.x +x;
  ball.y = ball.y +y;
}


