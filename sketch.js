//Create variables here
var dog, dogIMG;
var happyDog, happyDogIMG;
var database;
var foodS,foodStock;




function preload()
{
  //load images here
  dogIMG=loadImage("Dog.png");
  happyDogIMG=loadImage("happydog.png");
}

function setup() {
  database = firebase.database();
 

  createCanvas(500,500);
  dog=createSprite(250,250);
  dog.addImage(dogIMG);
  dog.scale=0.2;

  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
  
}


function draw() {  
  //backGround(46,139,87);

  if(keyWentDown(UP_ARROW)){
  writeStock(foodS)
  
  dog.addImage(happyDogIMG)}


//  foodStock.update('Food')
  drawSprites();
  //add styles here
  textSize(20);
  text("press up arrow key to feed Drago milk!",120,100);

  text("Food remaining:"+foodS,120,140);
  


}

function readStock(data){
  foodS=data.val();
}

function writeStock(x){
  if(x<=0){
    x=0
  }else{
   x=x-1
  }
  database.ref('/').update({
    Food:x
  })
}





