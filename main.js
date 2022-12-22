noseX = 0;
noseY = 0;

function preload(){
clownNose = loadImage('https://i.postimg.cc/x1gvQxM1/clown-Nose.png');
}

function setup(){
    canvas=createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function draw(){
image(video, 0, 0, 300, 300);
image(clownNose, noseX-15, noseY-20, 35,35);
}

function takeSnapshot(){
    save("clowned_image.png");
}

function modelLoaded(){
    console.log("PoseNet is initialized");
}

function gotPoses(results){
    if (results.length > 0 ){
        console.log(results)
        console.log("nose x pos = " + results[0].pose.nose.x);
        console.log("nose y pos = " + results[0].pose.nose.y);
    
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
    }
    }