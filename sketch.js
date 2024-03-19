let angle = 0;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {
    background(0);

    directionalLight(255, 255, 255, 0, 0, -1);
    ambientLight(100);
  
    let camX = map(mouseX, 0, width, -200, 200);
    let camY = map(mouseY, 0, height, -200, 200);
    camera(camX, camY, (height/2) / tan(PI/6), 0, 0, 0, 0, 1, 0);
  
    push();
    rotateX(angle);
    rotateY(angle * 0.3);
    rotateZ(angle * 0.2);
    noStroke();
    fill(100, 200, 250);
    sphere(150);
    pop();
  
    angle += 0.03;
  }
  