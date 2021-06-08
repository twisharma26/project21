var bullet, wall, speed, weight, thickness, bulletRightEdge, wallLeftEdge;

function setup() {
  createCanvas(1600, 400);
  
  speed = random(50, 150)
  weight = random(30, 52)
  thickness = random(22, 83)

  bullet = createSprite(50, 200, 70, 20)
  bullet.shapeColor = color("white")
  wall = createSprite(1200, 200, thickness, height/2)
  wall.shapeColor = color(80, 80, 80)
}

function draw() {
  background(0);
  
  bullet.velocityX = speed;
  

  if (hascolided(wall, bullet)) {
    bullet.velocityX = 0
    var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness)

    if (damage < 10) {
      wall.shapeColor = color(255, 0, 0)
    }

    if (damage > 10) {
      wall.shapeColor = color(0, 255, 0)
    }
  }

  //console.log(damage)
  drawSprites();
}

function hascolided(wall, bullet) {
  bulletRightEdge = bullet.x + bullet.width
  wallLeftEdge = wall.x

  if (bulletRightEdge >= wallLeftEdge) {
    return true
  }
  return false
}

