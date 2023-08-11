const canvas = document.getElementById("pong");
const ctx = canvas.getContext("2d");

// Few Variable's for movement
var Yvelocity = 4;

var enemyBulletSpeed = 2;

// player Object
const player = {
  x: canvas.width/2,
  y: canvas.height - 65 ,
  width: 20,
  height: 20,
  color: 'WHITE'
}


// enemy Objects
const enemy1 = {
  x: 10,
  y: 10,
  width: 25,
  height: 25,
  color: 'RED'
}
const enemy2 = {
  x: 45,
  y: 10 ,
  width: 25,
  height: 25,
  color: 'RED'
}
const enemy3 = {
  x: 80,
  y: 10,
  width: 25,
  height: 25,
  color: 'RED'
}
const enemy4 = {
  x: 115,
  y: 10,
  width: 25,
  height: 25,
  color: 'RED'
}
const enemy5 = {
  x: 150,
  y: 10 ,
  width: 25,
  height: 25,
  color: 'RED'
}
const enemy6 = {
  x: 185,
  y: 10,
  width: 25,
  height: 25,
  color: 'RED'
}
const enemy7 = {
  x: 220,
  y: 10,
  width: 25,
  height: 25,
  color: 'RED'
}
const enemy8 = {
  x: 255,
  y: 10 ,
  width: 25,
  height: 25,
  color: 'RED'
}
const enemy9 = {
  x: 290,
  y: 10,
  width: 25,
  height: 25,
  color: 'RED'
}
const enemy10 = {
  x: 325,
  y: 10,
  width: 25,
  height: 25,
  color: 'RED'
}
const enemy11 = {
  x: 360,
  y: 10 ,
  width: 25,
  height: 25,
  color: 'RED'
}
const enemy12 = {
  x: 395,
  y: 10,
  width: 25,
  height: 25,
  color: 'RED'
}
const enemy13 = {
  x: 430,
  y: 10,
  width: 25,
  height: 25,
  color: 'RED'
}
const enemy14 = {
  x: 465,
  y: 10,
  width: 25,
  height: 25,
  color: 'RED'
}
const enemy15 = {
  x: 500,
  y: 10 ,
  width: 25,
  height: 25,
  color: 'RED'
}
const enemy16 = {
  x: 535,
  y: 10,
  width: 25,
  height: 25,
  color: 'RED'
}
const enemy17 = {
  x: 570,
  y: 10,
  width: 25,
  height: 25,
  color: 'RED'
}

// player bullet Object
const playerbullet = {
  x: player.x + 25 - 5,
  y: player.y,
  width: 2,
  height: 6,
  color: 'WHITE'
}

// enemy bullet Objects
const enemybullet1 = {
  x: enemy1.x + 9,
  y: enemy1.y,
  width: 5,
  height: 10,
  color: 'BLUE'
}
const enemybullet2 = {
  x: enemy2.x + 9,
  y: enemy2.y,
  width: 5,
  height: 10,
  color: 'BLUE'
}
const enemybullet3 = {
  x: enemy3.x + 9,
  y: enemy3.y,
  width: 5,
  height: 10,
  color: 'BLUE'
}
const enemybullet4 = {
  x: enemy4.x + 9,
  y: enemy4.y,
  width: 5,
  height: 10,
  color: 'BLUE'
}
const enemybullet5 = {
  x: enemy5.x + 9,
  y: enemy5.y,
  width: 5,
  height: 10,
  color: 'BLUE'
}
const enemybullet6 = {
  x: enemy6.x + 9,
  y: enemy6.y,
  width: 5,
  height: 10,
  color: 'BLUE'
}
const enemybullet7 = {
  x: enemy7.x + 9,
  y: enemy7.y,
  width: 5,
  height: 10,
  color: 'BLUE'
}
const enemybullet8 = {
  x: enemy8.x + 9,
  y: enemy8.y,
  width: 5,
  height: 10,
  color: 'BLUE'
}
const enemybullet9 = {
  x: enemy9.x + 9,
  y: enemy9.y,
  width: 5,
  height: 10,
  color: 'BLUE'
}
const enemybullet10 = {
  x: enemy10.x + 9,
  y: enemy10.y,
  width: 5,
  height: 10,
  color: 'BLUE'
}
const enemybullet11 = {
  x: enemy11.x + 9,
  y: enemy11.y,
  width: 5,
  height: 10,
  color: 'BLUE'
}
const enemybullet12 = {
  x: enemy12.x + 9,
  y: enemy12.y,
  width: 5,
  height: 10,
  color: 'BLUE'
}
const enemybullet13 = {
  x: enemy13.x + 9,
  y: enemy13.y,
  width: 5,
  height: 10,
  color: 'BLUE'
}
const enemybullet14 = {
  x: enemy14.x + 9,
  y: enemy14.y,
  width: 5,
  height: 10,
  color: 'BLUE'
}
const enemybullet15 = {
  x: enemy15.x + 9,
  y: enemy15.y,
  width: 5,
  height: 10,
  color: 'BLUE'
}
const enemybullet16 = {
  x: enemy16.x + 9,
  y: enemy16.y,
  width: 5,
  height: 10,
  color: 'BLUE'
}
const enemybullet17 = {
  x: enemy17.x + 9,
  y: enemy17.y,
  width: 5,
  height: 10,
  color: 'BLUE'
}


// Add mouse event listener
canvas.addEventListener("mousemove", getMousePos);

// Shoot player bullet
document.addEventListener("mousedown", resetPlayerBullet);
document.addEventListener("mouseup", resetPlayerBullet);

// Event handler function
function getMousePos(evt) {
  let rect = canvas.getBoundingClientRect();

  player.x = evt.clientX - player.width/2;
}

function drawRect(x, y, w, h, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, w, h);
  
}

function enemySensing(x, y, w, h) {
  if (playerbullet.x > x && playerbullet.x < x+w && playerbullet.y > y && playerbullet.y < y+h) {
    return true;
  } else {
    return false;
  }
  
  // return either true or false
}

function  playerSensing(x, y) {
  if (x > player.x && x < player.x+player.w && y > player.y && y < player.y + player.h) {
    return true;
  } else {
    return false;
  }
  
  // return either true or false
}

// Shoot enemy bullets
function shootEnemyBullet1() {
  enemybullet1.y = enemybullet1.y + enemyBulletSpeed;
  if (enemybullet1.y > 400) {
    shootEnemyBullet2();
    enemybullet1.y = enemy1.y;
  }
}
function shootEnemyBullet17() {
  enemybullet17.y = enemybullet17.y + enemyBulletSpeed;
  if (enemybullet17.y > 400) {
    shootEnemyBullet16();
    enemybullet17.y = enemy17.y;
  }
}
function shootEnemyBullet2() {
  enemybullet2.y = enemybullet2.y + enemyBulletSpeed;
  if (enemybullet2.y > 400) {
    shootEnemyBullet3();
    enemybullet2.y = enemy2.y;
  }
}
function shootEnemyBullet16() {
  enemybullet16.y = enemybullet16.y + enemyBulletSpeed;
  if (enemybullet16.y > 400) {
    shootEnemyBullet15();
    enemybullet16.y = enemy16.y;
  }
}

function shootEnemyBullet3() {
  enemybullet3.y = enemybullet3.y + enemyBulletSpeed;
  if (enemybullet3.y > 400) {
    shootEnemyBullet4();
    enemybullet3.y = enemy3.y;
  }
}

function shootEnemyBullet15 () {
  enemybullet15.y = enemybullet15.y + enemyBulletSpeed;
  if (enemybullet15.y > 400) {
    shootEnemyBullet14();
    enemybullet15.y = enemy15.y;
  }
}
function ShootEnemyBullet4() {
  enemybullet4.y = enemybullet4.y + enemyBulletSpeed;
  if (enemybullet4.y > 400) {
    shootEnemyBullet5();
    enemybullet4.y = enemy4.y;
 }
}
function shootEnemyBullet14 () {
  enemybullet14.y = enemybullet14.y + enemyBulletSpeed;
  if (enemybullet14.y > 400) {
    shootEnemyBullet13();
    enemybullet14.y = enemy14.y;
}
}
function ShootEnemyBullet5() {
  enemybullet5.y = enemybullet5.y + enemyBulletSpeed;
  if (enemybullet5.y > 400) {
    shootEnemyBUllet6();
    enemybullet5.y = enemy5.y;
}
}
function shootEnemyBullet13 () {
  enemybullet13.y = enemybullet14.y + enemyBulletSpeed;
  if (enemybullet13.y > 400) {
    shootEnemyBullet12();
    enemybullet13.y = enemy13.y;
  }
}  
function shootEnemyBullet6() {
  enemybullet6.y = enemybullet6.y + enemyBulletSpeed;
  if (enemybullet6.y > 400) {
    shootEnemyBullet7();
    enemybullet6.y = enemy6.y;
  }
}
function shootEnemyBullet12() {
  enemybullet12.y = enemybullet12 + enemyBulletSpeed;
  if (enemybullet12.y > 400) {
    shootEnemyBullet11();
    enemybullet12.y = enemy12.y;
  }
}
function shootEnemyBullet7() {
  enemybullet7.y = enemybullet7.y + enemyBulletSpeed;
  if (enemybullet7.y > 400) {
    shootEnemyBullet8();
    enemybullet7.y = enemy7.y;
  }
}
function shootEnemyBullet11() {
  enemybullet11.y = enemybullet11.y + enemyBulletSpeed;
  if (enemybullet11.y > 400) {
    shootEnemyBullet10();
    enemybullet11.y = enemy11.y;
  }
}
function shootEnemyBullet8() {
  enemybullet8.y = enemybullet8.y + enemyBulletSpeed;
    if (enemybullet8.y > 400) {
      shootEnemyBullet9();
      enemybullet8.y = enemy8.y;
  }
}
function shootEnemyBullet10() {
  enemybullet10.y = enemybullet10.y + enemyBulletSpeed;
    if (enemybullet10 > 400) {
      enemybullet10.y = enemy10.y;
    }
}
function shootEnemyBullet9() {
  enemybullet9.y = enemybullet9.y + enemyBulletSpeed;
    if (enemybullet9y > 400) {
      enemybullet9.y = enemy9.y;
  }
}



// Reset Player Bullet
function resetPlayerBullet() {
  playerbullet.x = player.x + 10;
  playerbullet.y = player.y;
}

// Shoot player bullets
function movePlayerBullet() {
  playerbullet.y = playerbullet.y - 5;
}

function render() {
  // Drawing canvas
  drawRect(0, 0, canvas.width, canvas.height, 'black');
  // Drawing player
  drawRect(player.x, player.y, player.width, player.height, player.color);
  // Drawing enemys
  drawRect(enemy1.x, enemy1.y, enemy1.width, enemy1.height, enemy1.color);
  drawRect(enemy2.x, enemy2.y, enemy2.width, enemy2.height, enemy2.color);
  drawRect(enemy3.x, enemy3.y, enemy3.width, enemy3.height, enemy3.color);
  drawRect(enemy4.x, enemy4.y, enemy4.width, enemy4.height, enemy4.color);
  drawRect(enemy5.x, enemy5.y, enemy5.width, enemy5.height, enemy5.color);
  drawRect(enemy6.x, enemy6.y, enemy6.width, enemy6.height, enemy6.color);
  drawRect(enemy7.x, enemy7.y, enemy7.width, enemy7.height, enemy7.color);
  drawRect(enemy8.x, enemy8.y, enemy8.width, enemy8.height, enemy8.color);
  drawRect(enemy9.x, enemy9.y, enemy9.width, enemy9.height, enemy9.color);
  drawRect(enemy10.x, enemy10.y, enemy10.width, enemy10.height, enemy10.color);
  drawRect(enemy11.x, enemy11.y, enemy11.width, enemy11.height, enemy11.color);
  drawRect(enemy12.x, enemy12.y, enemy12.width, enemy12.height, enemy12.color);
  drawRect(enemy13.x, enemy13.y, enemy13.width, enemy13.height, enemy13.color);
  drawRect(enemy14.x, enemy14.y, enemy14.width, enemy14.height, enemy14.color);
  drawRect(enemy15.x, enemy15.y, enemy15.width, enemy15.height, enemy15.color);
  drawRect(enemy16.x, enemy16.y, enemy16.width, enemy16.height, enemy16.color);
  drawRect(enemy17.x, enemy17.y, enemy17.width, enemy17.height, enemy17.color);
  // Drawing bullet
  drawRect(playerbullet.x, playerbullet.y, playerbullet.width, playerbullet.height, playerbullet.color);
  // Drawing enemy bullets
  drawRect(enemybullet1.x, enemybullet1.y, enemybullet1.width, enemybullet1.height, enemybullet1.color);
  drawRect(enemybullet2.x, enemybullet2.y, enemybullet2.width, enemybullet2.height, enemybullet2.color);
  drawRect(enemybullet3.x, enemybullet3.y, enemybullet3.width, enemybullet3.height, enemybullet3.color);
  drawRect(enemybullet4.x, enemybullet4.y, enemybullet4.width, enemybullet4.height, enemybullet4.color);
  drawRect(enemybullet5.x, enemybullet5.y, enemybullet5.width, enemybullet5.height, enemybullet5.color);
  drawRect(enemybullet6.x, enemybullet6.y, enemybullet6.width, enemybullet6.height, enemybullet6.color);
  drawRect(enemybullet7.x, enemybullet7.y, enemybullet7.width, enemybullet7.height, enemybullet7.color);
  drawRect(enemybullet8.x, enemybullet8.y, enemybullet8.width, enemybullet8.height, enemybullet8.color);
  drawRect(enemybullet9.x, enemybullet9.y, enemybullet9.width, enemybullet9.height, enemybullet9.color);
  drawRect(enemybullet10.x, enemybullet10.y, enemybullet10.width, enemybullet10.height, enemybullet10.color);
  drawRect(enemybullet11.x, enemybullet11.y, enemybullet11.width, enemybullet11.height, enemybullet11.color);
  drawRect(enemybullet12.x, enemybullet12.y, enemybullet12.width, enemybullet12.height, enemybullet12.color);
  drawRect(enemybullet13.x, enemybullet13.y, enemybullet13.width, enemybullet13.height, enemybullet13.color);
  drawRect(enemybullet14.x, enemybullet14.y, enemybullet14.width, enemybullet14.height, enemybullet14.color);
  drawRect(enemybullet15.x, enemybullet15.y, enemybullet15.width, enemybullet15.height, enemybullet15.color);
  drawRect(enemybullet16.x, enemybullet16.y, enemybullet16.width, enemybullet16.height, enemybullet16.color);
  drawRect(enemybullet17.x, enemybullet17.y, enemybullet17.width, enemybullet17.height, enemybullet17.color);
}

function update() {
  // Check if mouse is clicked
  shootEnemyBullet1();
  shootEnemyBullet17();  
  movePlayerBullet();

  // Enemy touch sensing
  if(enemySensing(enemy1.x, enemy1.y, enemy1.width, enemy1.height)) {
    enemy1.color = 'BLACK';
  }
  if(enemySensing(enemy2.x, enemy2.y, enemy2.width, enemy2.height)) {
    enemy2.color = 'BLACK';
  }
  if(enemySensing(enemy3.x, enemy3.y, enemy3.width, enemy3.height)) {
    enemy3.color = 'BLACK';
  }
  if(enemySensing(enemy4.x, enemy4.y, enemy4.width, enemy4.height)) {
    enemy4.color = 'BLACK';
  }
  if(enemySensing(enemy5.x, enemy5.y, enemy5.width, enemy5.height)) {
    enemy5.color = 'BLACK';
  }
  if(enemySensing(enemy6.x, enemy6.y, enemy6.width, enemy6.height)) {
    enemy6.color = 'BLACK';
  }
  if(enemySensing(enemy7.x, enemy7.y, enemy7.width, enemy7.height)) {
    enemy7.color = 'BLACK';
  }
  if(enemySensing(enemy8.x, enemy8.y, enemy8.width, enemy8.height)) {
    enemy8.color = 'BLACK';
  }
  if(enemySensing(enemy9.x, enemy9.y, enemy9.width, enemy9.height)) {
    enemy9.color = 'BLACK';
  }
  if(enemySensing(enemy10.x, enemy10.y, enemy10.width, enemy10.height)) {
    enemy10.color = 'BLACK';
  }
  if(enemySensing(enemy11.x, enemy11.y, enemy11.width, enemy11.height)) {
    enemy11.color = 'BLACK';
  }
  if(enemySensing(enemy12.x, enemy12.y, enemy12.width, enemy12.height)) {
    enemy12.color = 'BLACK';
  }
  if(enemySensing(enemy13.x, enemy13.y, enemy13.width, enemy13.height)) {
    enemy13.color = 'BLACK';
  }
  if(enemySensing(enemy14.x, enemy14.y, enemy14.width, enemy14.height)) {
    enemy14.color = 'BLACK';
  }
  if(enemySensing(enemy15.x, enemy15.y, enemy15.width, enemy15.height)) {
    enemy15.color = 'BLACK';
  }
  if(enemySensing(enemy16.x, enemy16.y, enemy16.width, enemy16.height)) {
    enemy16.color = 'BLACK';
  }
  if(enemySensing(enemy17.x, enemy17.y, enemy17.width, enemy17.height)) {
    enemy17.color = 'BLACK';
  }
  if(playerSensing(enemybullet1.x, enemybullet1.y) || 
     playerSensing(enemybullet2.x, enemybullet2.y) ||
     playerSensing(enemybullet3.x, enemybullet3.y) ||
     playerSensing(enemybullet4.x, enemybullet4.y) ||
     playerSensing(enemybullet5.x, enemybullet5.y) ||
     playerSensing(enemybullet6.x, enemybullet6.y) || 
     playerSensing(enemybullet7.x, enemybullet7.y) ||
     playerSensing(enemybullet8.x, enemybullet8.y) ||
     playerSensing(enemybullet9.x, enemybullet9.y) ||
     playerSensing(enemybullet11.x, enemybullet11.y) ||             
     playerSensing(enemybullet12.x, enemybullet12.y) ||             
     playerSensing(enemybullet13.x, enemybullet13.y) ||             
     playerSensing(enemybullet14.x, enemybullet14.y) ||             
     playerSensing(enemybullet15.x, enemybullet15.y) ||             
     playerSensing(enemybullet16.x, enemybullet16.y) ||             
     playerSensing(enemybullet17.x, enemybullet17.y)                          
    ) {
    GameOver();
  }
}
  
function GameOver() {
    clearInterval(myInterval);
}

function game() {
  update();
  render();
}

var fps = 60;

const myInterval = setInterval(game, 1000/fps);