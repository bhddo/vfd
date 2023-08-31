function preload() {

}

function setup()
{
  canvas = creatCanvas(300, 300);
  canvas.center();
  Video = creatCapture(video);
  video.size(300, 300);
  video.hide();

  PoseNet = ml5.PoseNet(video modelLoaded);
  PoseNet.on('pose', gotPoses);
}

function modelLoaded()
{
  console.log('poseNet foi iniciado')
}

function draw() {

}

function takesnapshot()
{
    save('myFilterImage.jpg');
}

function gotPoses(results)
{
  if(results.legth > 0)
  {
    console.log(results);
    console.log("nariz x = " + results[0].pose.nose.x);
    console.log("nariz y = " + results[0].pose.nose.y);
  }
}
