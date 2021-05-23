Song_1 = "";
Song_2 = "";
left_wristX = "";
left_wristY = "";
right_wristX = "";
right_wristY = "";
function setup()
{
   canvas = createCanvas(600,500);
   canvas.center()

   video = createCapture(VIDEO);
   video.hide();
}

function draw()
{
    image(video, 0, 0 , 600, 500);
}
function preload()
{
    Song_1 = loadSound("Blue_Hai_Pani_Pani.mp3");
    Song_2 = loadSound("Peter Pan - 02 - Flying (320  kbps).mp3");
}