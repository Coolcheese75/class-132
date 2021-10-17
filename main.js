img = "";
status = "";

function preload()
{
img = loadImage("dog_cat.jpg");
}

function setup()
{
    canvas = createCanvas(640 , 380);
    canvas.center();
    objectdetectu = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "STATUS : SCANNING..."
}

function draw()
{
    image(img ,0 ,0 ,640 ,380);
    fill("#FF0000");
    text("dog" ,45 ,75);
    noFill();
    stroke("#FF0000");
    rect(30 ,60 ,450 ,310);

    fill("#FF0000");
    text("cat" ,320 ,120);
    noFill();
    stroke("#FF0000");
    rect(300 ,90 ,270 ,270);
}

function modelLoaded()
{
    console.log("loaded model!");
    status = true;
    objectdetectu.detect(img, gotResult);
}

function gotResult(error, results)
{
    if (error) {
        console.log(error);
    }
    console.log(results);
}