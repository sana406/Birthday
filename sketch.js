var back;
var backgroun;
var song;
var balloon1Image;
function preload(){
  back=loadImage("background.jpg");
  song=loadSound("birthdaysong.mp3");
  balloon1Image=loadImage("celeb.png")
}
function setup() {
  createCanvas(600, 600);
  backgroun = createSprite(100,190);
  backgroun.addImage("background.jpg", back);
  backgroun.velocityX=-0.3;
  song.play();
  
}

function draw() {
 // background(0);
  
  if(backgroun.x<260){
    backgroun.x=backgroun.width/2;
    
  
  }
  balloon1();
  drawSprites();
  
  textSize (30);
  textFont ("Cursive");
  stroke("purple");
  strokeWeight(8);
  text (" HAPPY BIRTHDAY" , 190 , 70 );
   textSize (30);
  textFont ("Cursive");
  stroke("orange");
  strokeWeight(8);
  text (" GOD BLESS YOU" , 190 , 150);
   textSize (36);
  textFont ("Calibri");
  stroke("pink");
  strokeWeight(40)
  text ("SWARA darling😍😘🎂🎈" , 90 , 240 );

}

function balloon1() {
  if(frameCount%80===0){
  var balloon1 = createSprite(0,Math.round(random(20, 370)), 10, 13);
  balloon1.addImage(balloon1Image);
  balloon1.velocityX = 3;
  balloon1.lifetime = 600;
  balloon1.scale = 1.0;
    
  
  }
}
