function setup() {
    createCanvas(1366, 625);
    background(color(100, 0, 0));
}
function draw() {
    if(mouseIsPressed){
        circle(mouseX, mouseY, 50)
    }
}
