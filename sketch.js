var box1;

function setup(){

createCanvas(500,500)
box1 = createSprite(200,200,30,30);
}

function draw(){

background("white");
if(keyIsDown(RIGHT_ARROW)){
    box1.x = box1.x + 5
}
if(keyIsDown(LEFT_ARROW)){
    box1.x = box1.x - 5
}

drawSprites();

}