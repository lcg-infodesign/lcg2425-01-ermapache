function setup() {
  createCanvas(1280, 720);
  background(255);
  noStroke();

  let cols=9;
  let rows=45;

  let cellWidth= width/cols;
  let cellHeight=height/rows;

  let rectWidth=cellWidth-45; 
  let rectHeight=cellHeight-35; 

  let baseColor=color(200, 184, 148, 150);  //beige
  let userColor=color(90, 182, 243, 150);   //blu

  for (let j=0; j<rows; j++) {
    for (let i=0; i<cols; i++) {
      let x=i*cellWidth;
      let y=j*cellHeight;

      let offsetX=random(-cellWidth*0.1, cellWidth*0.1);
      let offsetY=random(-cellHeight*0.02, cellHeight*0.02);
      let useUserColor = random(1) < 0.1;   //spawnrate 10% blu

      if (useUserColor) {
        fill(userColor);
      } else {
        fill(baseColor);
      }
      rect(x + offsetX, y + offsetY, rectWidth, rectHeight);
    }
  }
}