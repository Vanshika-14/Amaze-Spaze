// Game => "AMAZE-SPAZE"

   //Rules Astronaut
      var ruleGuy;

   //GameState
      var gameState = "LOST";

   //User
      var user1;

   //VAR BG
      var bg;

   //Score
      var score = 0;

   //Bullets
      var bullet1;
      var bullet2;
      var bullet3;

   //reloadTime
      var reloadTime = 0;

   //Groups
      var obstaclesGroup;
      var starsGroup;
      var bulletGroup;
      var obstacles2Group;
      var stars2Group;
      var bullet2Group;
      var obstacles3Group;
      var stars3Group;
      var bullet3Group;
      var planetsGroup;

   //Restart
      var reset;
      var restartIMG;

function preload() {
      //Preloading User's Images!
         user1IMG = loadImage("images/1.png");
         user2IMG = loadImage("images/2.png");
         user3IMG = loadImage("images/3.png");
         userIMG = loadImage("images/userF.png");
      //Preloading BGs!
         bgName = loadImage("images/bg1.png");
         bgHello = loadImage("images/bg.png");
         bgEnd = loadImage("images/bgEnd.png");
         bgMove = loadImage("images/bgMove.jpg");
         bgMove2 = loadImage("images/bgMove2.jfif");
         bgMove3 = loadImage("images/bgMove3.jfif");
      //Preloading LEVEL 1 Obstacles
         ob1 = loadImage("images/obs.PNG");
         ob2 = loadImage("images/obs2.jpg");
         ob3 = loadImage("images/obs3.jpg");
      //Preloading LEVEL 2 Obstacles
         obs1 = loadImage("images/ob1.png");
         obs2 = loadImage("images/ob2.png");
         obs3 = loadImage("images/ob3.png");
      //Preloading LEVEL 3 Obstacles
         obst1 = loadImage("images/obst1.png");
         obst2 = loadImage("images/obst2.png");
         obst3 = loadImage("images/obst3.png");
      //Preloading Stars for +3 Scores
         stars = loadImage("images/star.png");
      //Preloading 'ruleGuy'
         ruleGuyIMG = loadImage("images/rule.png");
      //Preloading Bullets
         bullet1IMG = loadImage("images/Bullet.png");
         bullet2IMG = loadImage("images/bullet1.png");
         bullet3IMG = loadImage("images/bullet2.png");
      //Preloading Planets
         p1 = loadImage("images/p1.png");
         p2 = loadImage("images/p2.png");
         p3 = loadImage("images/p3.png");
         p4 = loadImage("images/p4.png");
         p5 = loadImage("images/p5.png");
         p6 = loadImage("images/p6.png");
         p7 = loadImage("images/p7.png");
         p8 = loadImage("images/p8.png");
      //Preloading YOU LOSE .gif
         over = loadImage("images/lose.gif");
      //Audio of WINNING
         winSound = loadSound("audio/win.mp3");
      //Audio of LOSING
         loseSound = loadSound("audio/lose.mp3");
      //Audio of SCORING
         scoreSound = loadSound("audio/score.mp3");
      //Audio of EXPLODE
         expSound = loadSound("audio/explode.mp3");
      //Preloading RESET
         restartIMG = loadImage("images/reset.png");
}

function setup(){

      //Canvas
         createCanvas(displayWidth - 20, displayHeight - 30);

      //Displaying Users
         user1 = createSprite(displayWidth/2 - 550, displayHeight/2 + 270);
         user1.addImage(user1IMG);

      //Groups
         obstaclesGroup = new Group();
         starsGroup = new Group();
         bulletGroup = new Group();
         obstacles2Group = new Group();
         stars2Group = new Group();
         bullet2Group = new Group();
         obstacles3Group = new Group();
         stars3Group = new Group();
         bullet3Group = new Group();
         planetsGroup = new Group();

      //Reset Button
         reset = createSprite(displayWidth/20 + 100, displayHeight/2 + 70);
         reset.addImage(restartIMG);
         reset.scale = 0.5;
         reset.visible = false;

      //Button and Message
         message = createElement('h2');
         button = createButton("😇😇😇 Click Me 😇😇😇");

}

function draw(){

   if(gameState == "START"){

         //Background
         image(bgMove, 0, -displayHeight*4, displayWidth, displayHeight*7);

         textSize(100);
         textFont("Times New Roman");
         fill("white");
         text("Level 1", 10, 70);

         textSize(40);  
         textFont("Times New Roman");
         fill("white");
         text("Score: " + score, 10 , 110);

         //Hide
         button.hide();
         message.hide();

         //RIGHT_LEFT_ARROWS for User 1
         if(keyDown(RIGHT_ARROW)){
            user1.x = user1.x + 10;
         }
         if(keyDown(LEFT_ARROW)){
            user1.x = user1.x - 10;
         }

         //Space Bar
         if(keyDown("Space")){
            spawnBullets();
            gameState = "reload";
         }

         if(bulletGroup.isTouching(obstaclesGroup)){
            score = score + 1;
            scoreSound.play();
            obstaclesGroup.destroyEach();
         }

         if(user1.isTouching(starsGroup)){
            score = score + 5;
            scoreSound.play();
            starsGroup.destroyEach();
         }

         if(user1.isTouching(obstaclesGroup)){
            obstaclesGroup.destroyEach();
            score = score - 5;
            expSound.play();
         }

         if(score >= 50){
            gameState = "Level2";
         }

         if(score < -60){
            gameState = "LOST";
            loseSound.play();
         }

         //Functions for OBSTACLES and STARS
         spawnObstacles();
         spawnStars();
   }





   if(reloadTime == 10){
      gameState = "START";
      reloadTime = 0;
   }

   if(gameState == "reload"){
      if(frameCount % 1 == 0){
         reloadTime = reloadTime + 1;
      }

   }





   if(gameState == "Level2"){

         obstaclesGroup.destroyEach();
         starsGroup.destroyEach();
         obstaclesGroup.setVelocityYEach(0);
         starsGroup.setVelocityYEach(0);

         //Background
         image(bgMove2, 0, -displayHeight*4, displayWidth, displayHeight*7);

         //User
         user1.addImage(user2IMG);

         //Hide
         button.hide();
         message.hide();

         textSize(100);
         textFont("Times New Roman");
         fill("white");
         text("Level 2", 10, 70);

         textSize(40);  
         textFont("Times New Roman");
         fill("white");
         text("Score: " + score, 10 , 110);

         //RIGHT_LEFT_ARROWS for User 1
         if(keyDown(RIGHT_ARROW)){
            user1.x = user1.x + 10;
         }
         if(keyDown(LEFT_ARROW)){
            user1.x = user1.x - 10;
         }

         //Space Bar
         if(keyDown("Space")){
            spawnBullets2();
            gameState = "reload";
         }

         //Functions for OBSTACLES and STARS
         spawnObstacles2();
         spawnStars2();

         if(bullet2Group.isTouching(obstacles2Group)){
            score = score + 1;
            scoreSound.play();
            obstacles2Group.destroyEach();
         }

         if(user1.isTouching(stars2Group)){
            score = score + 5;
            scoreSound.play();
            stars2Group.destroyEach();
         }

         if(user1.isTouching(obstacles2Group)){
            obstacles2Group.destroyEach();
            score = score - 5;
            expSound.play();
         }

         if(score >= 100){
            gameState = "Level3";
         }

         if(score < -50){
            gameState = "LOST";
            loseSound.play();
         }

   }





   if(gameState == "Level3"){

         obstacles2Group.destroyEach();
         stars2Group.destroyEach();
         obstacles2Group.setVelocityYEach(0);
         stars2Group.setVelocityYEach(0);

         //Background
         image(bgMove3, 0, -displayHeight*4, displayWidth, displayHeight*7);

         //User
         user1.addImage(user3IMG);

         //Hide
            button.hide();
            message.hide();

         textSize(100);
         textFont("Times New Roman");
         fill("white");
         text("Level 3", 10, 70);

         textSize(40);  
         textFont("Times New Roman");
         fill("white");
         text("Score: " + score, 10 , 110);

         //RIGHT_LEFT_ARROWS for User 1
         if(keyDown(RIGHT_ARROW)){
            user1.x = user1.x + 10;
         }
         if(keyDown(LEFT_ARROW)){
            user1.x = user1.x - 10;
         }

         //Space Bar
         if(keyDown("Space")){
            spawnBullets3();
            gameState = "reload";
         }

         //Functions for OBSTACLES and STARS
         spawnObstacles3();
         spawnStars3();

         if(bullet3Group.isTouching(obstacles3Group)){
            score = score + 1;
            scoreSound.play();
            obstacles3Group.destroyEach();
         }

         if(user1.isTouching(stars3Group)){
            score = score + 5;
            scoreSound.play();
            stars3Group.destroyEach();
         }

         if(user1.isTouching(obstacles3Group)){
            obstacles3Group.destroyEach();
            score = score - 5;
            expSound.play();
         }

         if(score == 200){
            gameState = "Final";
            winSound.play();
         }

         if(score < -25){
            gameState = "LOST";
            loseSound.play();
         }

   }





   if(gameState == "Final"){

         obstacles3Group.destroyEach();
         stars3Group.destroyEach();
         obstacles3Group.setVelocityYEach(0);
         stars3Group.setVelocityYEach(0);

         //Background
         image(bgName, 0, -displayHeight*4, displayWidth, displayHeight*7);

         user1.addImage(userIMG);

         user1.x = displayWidth/2;
         user1.y = displayHeight/2 - 50;

         textSize(70);
         textFont("Garamond");
         fill("white");
         text("Great Job! Now, you have entered the BONUS Level!", 10, 70);
         text("Touch as many planets as possible!", 10, 125);

         message.html("Click 👉 To Play The Bonus Level!");
         message.style("color", "white");
         message.position(displayWidth/2 - 400, displayHeight/2 + 300);
         button.position(displayWidth/2 + 20, displayHeight/2 + 330);

         button.mousePressed(() =>{
            button.hide();
            message.hide();
            gameState = "Bonus";
         })
   }





   if(gameState == "Bonus"){

         //Hide
            button.hide();
            message.hide();

         background("black");

         //Text
         textSize(100);
         textFont("Times New Roman");
         fill("white");
         text("Bonus Level", 10, 70);

         //Score
         textSize(40);
         textFont("Times New Roman");
         fill("white");
         text("Score: " + score, 10 , 110);

         //UserIMG
         user1.scale = 0.25;

         //RIGHT_LEFT_ARROWS for User 1
         if(keyDown(RIGHT_ARROW)){
            user1.x = user1.x + 10;
         }
         if(keyDown(LEFT_ARROW)){
            user1.x = user1.x - 10;
         }

         //Functions for PLANETS
         spawnPlanets();

         if(user1.isTouching(planetsGroup)){
            score = score + 10;
            planetsGroup.destroyEach();
         }

         if(score == 30){
            gameState = "WIN";
         }

   }




   if(gameState == "WIN"){

      background(bgEnd);

      //User Destroy
      user1.destroy();

   }





   if(gameState == "LOST"){

      //Background
      background(over);

      //Hide
      button.hide();
      message.hide();

      //Reset Button
      reset.visible = true;

      //Positions of the User
      user1.addImage(ruleGuyIMG);
      user1.x = displayWidth/2 + 600;
      user1.y = displayHeight/2 + 10;

     
   }
  if (gameState == "LOST"){
   if(mousePressedOver(reset)){
      gameState = "level3";
   }
  }


   //Displaying The Sprites
   drawSprites();

}

function spawnObstacles(){
   if(World.frameCount % 90 == 0){
   var ob = createSprite(random(displayWidth/2 - 600, displayWidth/2 + 600), displayHeight/2 - 300);
   ob.velocityY = 6;
   var rand = Math.round(random(1, 3));
   switch(rand){
     case 1: ob.addImage(ob1);
       break;
     case 2: ob.addImage(ob2);
       break;
     case 3: ob.addImage(ob3);
       break;
      default : break
  }
  ob.scale = 0.25;
  ob.lifetime = 100;

  ob.depth = user1.depth;

  user1.depth = user1.depth + 1;
  ob.depth = ob.depth - 1;

  ob.setCollider("circle", 0, 0, 190);

  obstaclesGroup.add(ob);
  }
}

function spawnStars(){
   if(World.frameCount % 120 == 0){
     var star = createSprite(random(displayWidth/2 - 600, displayWidth/2 + 600), displayHeight/2 - 300);
     star.velocityY = 8;
     star.addImage(stars);
     star.scale = 0.1;
     star.lifetime = 100;
     starsGroup.add(star);
   }
}

function spawnBullets(){
   var bullet = createSprite(displayWidth/2,displayHeight/2);
   bullet.velocityY = -7;
   var rand = Math.round(random(1, 3));
   switch(rand){
     case 1: bullet.addImage(bullet1IMG);
       break;
     case 2: bullet.addImage(bullet2IMG);
       break;
     case 3: bullet.addImage(bullet3IMG);
       break;
      default : break
  }
  bullet.scale = 0.05;
  bullet.lifetime = 200;
  bullet.x = user1.x;

  bulletGroup.add(bullet);
}

//Level 2 GAMESTATE
function spawnObstacles2(){
   if(World.frameCount % 90 == 0){
   var obs = createSprite(random(displayWidth/2 - 600, displayWidth/2 + 600), displayHeight/2 - 300);
   obs.velocityY = 8;
   var rand = Math.round(random(1, 3));
   switch(rand){
     case 1: obs.addImage(obs1);
       break;
     case 2: obs.addImage(obs2);
       break;
     case 3: obs.addImage(obs3);
       break;
      default : break
  }
  obs.scale = 0.5;
  obs.lifetime = 100;

  obs.depth = user1.depth;

  user1.depth = user1.depth + 1;
  obs.depth = obs.depth - 1;

  obs.setCollider("circle", 0, 0, 190);

  obstacles2Group.add(obs);
  }
}

function spawnStars2(){
   if(World.frameCount % 120 == 0){
     var stars2 = createSprite(random(displayWidth/2 - 600, displayWidth/2 + 600), displayHeight/2 - 300);
     stars2.velocityY = 8;
     stars2.addImage(stars);
     stars2.scale = 0.1;
     stars2.lifetime = 100;
     stars2Group.add(stars2);
   }
}

function spawnBullets2(){
   var bullets = createSprite(displayWidth/2,displayHeight/2);
   bullets.velocityY = -7;
   var rand = Math.round(random(1, 3));
   switch(rand){
     case 1: bullets.addImage(bullet1IMG);
       break;
     case 2: bullets.addImage(bullet2IMG);
       break;
     case 3: bullets.addImage(bullet3IMG);
       break;
      default : break
  }
  bullets.scale = 0.05;
  bullets.lifetime = 200;
  bullets.x = user1.x;

  bulletsGroup.add(bullets);
}

//Level 3 GAMESTATE
function spawnObstacles3(){
   if(World.frameCount % 90 == 0){
   var obs3 = createSprite(random(displayWidth/2 - 600, displayWidth/2 + 600), displayHeight/2 - 300);
   obs3.velocityY = 8;
   var rand = Math.round(random(1, 3));
   switch(rand){
     case 1: obs3.addImage(obst1);
       break;
     case 2: obs3.addImage(obst2);
       break;
     case 3: obs3.addImage(obst3);
       break;
      default : break
  }
  obs3.scale = 1.2;
  obs3.lifetime = 100;

  obs3.depth = user1.depth;

  user1.depth = user1.depth + 1;
  obs3.depth = obs3.depth - 1;
  obs3.setCollider("circle", 0, 0, 190);

  obstacles3Group.add(obs3);
  }
}

function spawnStars3(){
   if(World.frameCount % 120 == 0){
     var stars3 = createSprite(random(displayWidth/2 - 600, displayWidth/2 + 600), displayHeight/2 - 300);
     stars3.velocityY = 8;
     stars3.addImage(stars);
     stars3.scale = 0.1;
     stars3.lifetime = 100;
     stars3Group.add(stars3);
   }
}

function spawnBullets3(){
   var bullets3 = createSprite(displayWidth/2,displayHeight/2);
   bullets3.velocityY = -7;
   var rand = Math.round(random(1, 3));
   switch(rand){
     case 1: bullets3.addImage(bullet1IMG);
       break;
     case 2: bullets3.addImage(bullet2IMG);
       break;
     case 3: bullets3.addImage(bullet3IMG);
       break;
      default : break
  }
  bullets3.scale = 0.05;
  bullets3.lifetime = 200;
  bullets3.x = user1.x;

  bullet3Group.add(bullets3);
}

function spawnPlanets(){
   if(World.frameCount % 90 == 0){
   var pl = createSprite(random(displayWidth/2 - 600, displayWidth/2 + 600), displayHeight/2 - 300);
   pl.velocityY = 7;
   var rand = Math.round(random(1, 8));
   switch(rand){
     case 1: pl.addImage(p1);
       break;
     case 2: pl.addImage(p2);
       break;
     case 3: pl.addImage(p3);
       break;
      case 4: pl.addImage(p4);
       break;
     case 5: pl.addImage(p5);
       break;
     case 6: pl.addImage(p6);
       break;
       case 7: pl.addImage(p7);
       break;
     case 8: pl.addImage(p8);
       break;
      default : break
  }
  pl.scale = 0.25;
  pl.lifetime = 100;
  planetsGroup.add(pl);
  }
}