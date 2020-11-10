
let data = {};

function setup() {
    createCanvas(windowWidth, windowHeight);
    colorMode(HSB, 360, 100, 300);
}

function draw() {
    background(0);

    fill(0, 100, data.Red);
    rect(0, 0, width/6, height);

    fill(30, 100, data.Orange);
    rect(1 * width/6, 0, width/6, height);

    fill(60, 100, data.Yellow);
    rect(2 * width/6, 0, width/6, height);

    fill(120, 100, data.Green);
    rect(3 * width/6, 0, width/6, height);

    fill(240, 100, data.Blue);
    rect(4 * width/6, 0, width/6, height);

    fill(300, 100, data.Violet);
    rect(5 * width/6, 0, width/6, height);


}







let ws = new WebSocket("ws://localhost:1880/ws/receive");

ws.onopen = function(e) {
    console.log(e);
}

ws.onmessage = function(e) {
    data = JSON.parse(e.data);
    console.log(data);
}