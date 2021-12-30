//Define img variable as empty
img = "";

function preload()
{
    //Write preload function
    img = loadImage("dog_cat.jpg");
}

function setup()
{
    //Create the Canvas and place it in center of the screen
    canvas = createCanvas(640 , 420);
    canvas.center();
}

function draw()
{
    //Write Draw Function
    image(img , 0 , 0 , 640 , 420);
    fill("#FF0000");
    text("Dog" , 45 , 75);
    noFill();
    stroke("#FF0000");
    rect(30 , 60 , 450 , 350);
}

