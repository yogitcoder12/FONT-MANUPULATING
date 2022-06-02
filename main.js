leftWristX = 0;
rightWristX = 0;
difference = 0;
function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);
    canvas = createCanvas(500, 500)
    canvas.position(560, 80);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
 function draw(){
     background("#FFE5B4");
     textSize(difference);
     fill("yellow");
     stroke("pink");
     text('DSSY', 100, 250);
 }
 function modelLoaded(){
     console.log('PoseNet Is Initialized!');
 }
 function gotPoses(results){
     if(results.length > 0)
     {
         console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
         }
 }