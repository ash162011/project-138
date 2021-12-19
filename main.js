rightWristX = 0;
rightWristY = 0;
scoreRightWrist = 0;

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

function gotPoses(results){
	if(results.length > 0){
		rightWristX = results[0].pose.nose.x;
	  rightWristY = results[0].pose.nose.y;
	  console.log(results);

	}
}
game_status = "";

function startGame(){
  game_status = "start";
  document.getElementById("status").innerHTML = "Game Is Loaded";
}

function draw(){
  image(video, 0, 0, 700, 600);

  if(scoreRightWrist > 0.2){
    fill("#ffdde4");
    stroke("#ffdde4");
    circle(rightWristX, rightWristY, 30);
  }

  if(game_status == "start"){
    
  }
}