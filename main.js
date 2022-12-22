noseX = 0
noseY = 0

function preload(){
clownNose = loadImage('https://i.postimg.cc/x1gvQxM1/clown-Nose.png');
}

function setup(){
    canvas=createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();

    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
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
function draw(){
image(video, 0, 0, 300, 300);
image(clownNose, noseX, noseY, 25, 25);
}

function takeSnapshot(){
    save("clowned_image");
}

function modelLoaded(){
    console.log("PoseNet is initialized");
}

