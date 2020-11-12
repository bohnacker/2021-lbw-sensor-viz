
let data = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
    //colorMode(HSB, 360, 100, 100);
}

function draw() {
    background(0);

    stroke(30, 100, 100);
       
    let xalt = 0;
    let yalt = height;

    for (let i = 0; i < data.length; i++) {
        let d = data[i];
        let x = map(i, 0, 100, 0, width);
        let y = map(log(d.Orange), 0, 14, height, 0);

        fill(30, 100, 100);
        circle(x, y, 5);
        stroke(30, 100, 100);
        line(xalt, yalt, x, y);

        xalt = x;
        yalt = y;
    }

}




let ws = new WebSocket("ws://localhost:1880/ws/receive");

ws.onopen = function(e) {
    console.log(e);
}

ws.onmessage = function(e) {
    data.push(JSON.parse(e.data));
    if (data.length > 100) {
        data.shift();
    }

    //console.log(data);
}