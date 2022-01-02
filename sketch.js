var Life = 200

function preload() {

bg = loadImage("images/TwoCliffsBackground.jpg")
TheMonkeyBars = loadImage("images/monkeybars.png")
TheDude = loadImage("images/SurvivorSafe.png")
TheDudeFell = loadImage("images/SurvivorDead.png")
TheBirdsFlying = loadAnimation("images/birdwingisdown.png.png","images/birdwingisup.png.png")
TheParrotsFlying = loadAnimation("images/flyingparrotwingsdown.png","images/flyingparrotwingsup.png")
AirplaneInTheSky = loadImage("images/airplaneflying.png")
hotairballoonUP = loadImage("images/hotaireballoongoingup.png")
HungerCroc = loadAnimation("images/savagecroc1.png","images/savagecroc2.png")
RedBirdFlying = loadAnimation("images/redbirddown.png","images/redbirdup.png")

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  


  airBalloon = createSprite(600,700)
  airBalloon.addImage(hotairballoonUP)
  airBalloon.scale = 0.1
  airBalloon.velocityY = -1



  TheBARS = createSprite(width/2, 300, 50, 50);
  TheBARS.addImage(TheMonkeyBars)
  TheBARS.scale = 2.4
  
  ThePlayer = createSprite(width/2, 270, 50, 50);
  ThePlayer.addImage(TheDude)
  ThePlayer.scale = 0.8

  MenuScreenPartOne = createSprite(900,1000,1900,1300);
  MenuScreenPartOne.shapeColor = "black"

  MenuScreenPartTwo = createSprite(900,-100,1900,1300);
  MenuScreenPartTwo.shapeColor = "black"



  EvilAlligator = createSprite(width/2, 600, 50, 50);
  EvilAlligator.addAnimation("Starving", HungerCroc);
  EvilAlligator.changeAnimation("Starving", HungerCroc);
  EvilAlligator.scale = 0.4

  redBird = createSprite(2400,90)
  redBird.addAnimation("InTheAir",RedBirdFlying);
  redBird.changeAnimation("InTheAir",RedBirdFlying);
  redBird.scale = 0.1
  redBird.velocityX = -2

  redBird = createSprite(2600,60)
  redBird.addAnimation("InTheAir",RedBirdFlying);
  redBird.changeAnimation("InTheAir",RedBirdFlying);
  redBird.scale = 0.06
  redBird.velocityX = -2


  redBird = createSprite(2700,90)
  redBird.addAnimation("InTheAir",RedBirdFlying);
  redBird.changeAnimation("InTheAir",RedBirdFlying);
  redBird.scale = 0.07
  redBird.velocityX = -2


  redBird = createSprite(2900,90)
  redBird.addAnimation("InTheAir",RedBirdFlying);
  redBird.changeAnimation("InTheAir",RedBirdFlying);
  redBird.scale = 0.1
  redBird.velocityX = -2





  Plane = createSprite(2000, 80);
  Plane.addAnimation("TakeOff",AirplaneInTheSky);
  Plane.changeAnimation("TakeOff",AirplaneInTheSky);
  Plane.velocityX = -3
  Plane.scale = 0.1


  TheeParrots = createSprite(-400,80);
  TheeParrots.addAnimation("flyingP",TheParrotsFlying)
  TheeParrots.addAnimation("flyingP",TheParrotsFlying)
  TheeParrots.scale = 0.06
  TheeParrots.velocityX = 1

  TheeParrots = createSprite(-600,80);
  TheeParrots.addAnimation("flyingP",TheParrotsFlying)
  TheeParrots.addAnimation("flyingP",TheParrotsFlying)
  TheeParrots.scale = 0.09
  TheeParrots.velocityX = 1

  TheeParrots = createSprite(-700,80);
  TheeParrots.addAnimation("flyingP",TheParrotsFlying)
  TheeParrots.addAnimation("flyingP",TheParrotsFlying)
  TheeParrots.scale = 0.1
  TheeParrots.velocityX = 1

  TheeParrots = createSprite(-900,30);
  TheeParrots.addAnimation("flyingP",TheParrotsFlying)
  TheeParrots.addAnimation("flyingP",TheParrotsFlying)
  TheeParrots.scale = 0.07
  TheeParrots.velocityX = 1


  TheeBirds = createSprite(800,60);
  TheeBirds.addAnimation("flying",TheBirdsFlying);
  TheeBirds.changeAnimation("flying",TheBirdsFlying);
  TheeBirds.scale = 0.1
  TheeBirds.velocityX = 1

  TheeBirds = createSprite(700,80);
  TheeBirds.addAnimation("flying",TheBirdsFlying);
  TheeBirds.changeAnimation("flying",TheBirdsFlying);
  TheeBirds.scale = 0.1
  TheeBirds.velocityX = 1

  TheeBirds = createSprite(400,40);
  TheeBirds.addAnimation("flying",TheBirdsFlying);
  TheeBirds.changeAnimation("flying",TheBirdsFlying);
  TheeBirds.scale = 0.1
  TheeBirds.velocityX = 1

  TheeBirds = createSprite(-100,80);
  TheeBirds.addAnimation("flying",TheBirdsFlying);
  TheeBirds.changeAnimation("flying",TheBirdsFlying);
  TheeBirds.scale = 0.1
  TheeBirds.velocityX = 1

  


  

  DeathBlock = createSprite(180,255,10,10);
  

  BlockThatMovesTheMenuScreenOutOfTheWay = createSprite(200,200,50,50);
  BlockThatMovesTheMenuScreenOutOfTheWay.velocityX = 4
  BlockThatMovesTheMenuScreenOutOfTheWay.visible = false


  TheTouchingBlock = createSprite(900,200,50,50);
  TheTouchingBlock.visible = false
  
  
  

  Button = createButton("Click to keep the Green Bar up")
  Button.position(-200,320)
}

function draw() {
  background(bg);
  Life = Life - 0.5
  fill("white")
  rect(200, 250, 200, 10)
  fill("green")
  rect(200, 250, Life, 10)
  drawSprites();




  





  
  fill("red")
  textSize(70)
  text("The Ladder Guy",500,300)
  

  Button.mouseClicked(function(){
  Life = Life + 3
  })



  if(TheTouchingBlock.isTouching(BlockThatMovesTheMenuScreenOutOfTheWay)){
    MenuScreenPartOne.velocityY = 30
    MenuScreenPartTwo.velocityY = -30
    Button.position(200,320)
    TheTouchingBlock.destroy()
    BlockThatMovesTheMenuScreenOutOfTheWay.destroy()
    
  }
}

