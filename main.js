function draw(){

}

function setup() {   
canvas = createCanvas(350,350)
canvas.center();

video = createCapture(VIDEO)
video.size(350, 350)
video.position(50, 200)

posenet = ml5.poseNet(video, modelLoaded)
posenet.on('pose', gotPoses)
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results)
    }
   
}
function modelLoaded() {
    console.log("Posenet is initialized")
}
function preload(){

}