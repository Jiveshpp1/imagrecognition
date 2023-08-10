Webcam.set({
    width:300,
    height:300,
    image_format:'png',
    png_quality:90
});

camera = document.getElementById('livecam');

Webcam.attach('#camera');

function takeimage(){
    Webcam.snap(function(data_uri){
        document.getElementById("finalimg").innerHTML = '<img id="captured_image" src="'+data_uri+'"></img>'

    })
}

console.log('ml5 version',ml5.version);

cassifier = ml5.image_Classifier("https://teachablemachine.withgoogle.com/models/4BbA5q0hr/model.json",modelLoaded);

console.log("model Loaded")