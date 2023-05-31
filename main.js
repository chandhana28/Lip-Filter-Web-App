lipsX = 0;
lipsY = 0;

function preload(){
    red_lips = loadImage('https://i.postimg.cc/PxFvYgkv/l1.png');
}

function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('PoseNet Is Initialized');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        lipsX = results[0].pose.nose.x;
        lipsY = results[0].pose.nose.y;
        console.log("lips x = " + lipsX);
        console.log("lips y = " + lipsY);
    }
}

function draw(){
    image(video, 0, 0, 300, 300);
    image(red_lips, lipsX-17, lipsY+10, 40, 25);
}

function take_snapshot(){
    save('LipFilterImage.png');
} 