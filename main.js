function setup(){
canvas =  createCanvas(600,500);
canvas.parent('canvas');

video = createCapture(VIDEO);
video.hide();

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}

function modelLoaded() {
  console.log('PoseNet Is Initialized');
}

function gotPoses(){

}

function draw(){
  image(video, 0, 0, 700, 600);
}

