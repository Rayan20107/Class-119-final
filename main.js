function preload()
{

}

function setup()
{
canvas=createCanvas(300, 300);
canvas.center();
video=createCapture(VIDEO);
video.hide();
Classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/jrLSn92kD/model.json", modelLoaded);
}

function modelLoaded()
{
    console.log("modelLoaded");
}

function gotResults(error, results)
{
 if (error) {
     console.log(error)
 }
 else
 {
     console.log(results)
     document.getElementById("object-name").innerHTML=results[0].label;
     document.getElementById("object-accuracy").innerHTML=results[0].confidence.toFixed(3);
 }
}

function draw()
{
image(video, 0, 0, 300, 300);
Classifier.classify(video, gotResults);
}