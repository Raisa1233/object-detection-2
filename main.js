img  = "";
status = "";

function setup()
{
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status"). innerHTML = "Status : Detecting Objects";
}

function preload()
{
    img = loadImage('download.jpg');
}

function modelLoaded()
{
    console.log("Model Loaded!");
    status=true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results) 
{
    if(error) {
        console.log(error);
    }
    console.log(results);
}


function draw()
{
    image(img, 0, 0, 640, 420);
    fill("#FF0000");
    text("Bed (100%)", 45, 75);
    noFill()
    stroke("#FF0000")
    rect(30, 60, 560, 300);

    fill("#FF0000");
    text("Lamp 100%", 350, 110);
    noFill();
    stroke("#FF0000");
    rect(340, 95, 120, 120);
}