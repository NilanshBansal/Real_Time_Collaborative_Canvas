var socket;

function setup(){
    canvasElement = createCanvas(600,400);
    if(canvasElement && canvasElement.canvas && canvasElement.canvas.style){
        canvasElement.canvas.style.cursor = "pointer";
    }
    
    background(51);
    socket = io.connect(window.location.hostname)

    socket.on('mouse',newDrawing);  
}

function newDrawing(data){
    noStroke();
    fill(255,0,100);
    ellipse(data.x,data.y,36,36);
}

function mouseDragged(){
    console.log('Sending: ' + mouseX + ',' + mouseY);

    var data = {
        x:mouseX,
        y:mouseY
    }
    socket.emit('mouse',data);

    noStroke();
    fill(255);
    ellipse(mouseX,mouseY,36,36);
}
