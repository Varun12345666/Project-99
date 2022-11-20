var SpeechRecognition= window.webkitSpeechRecognition;
var recognition= new SpeechRecognition();

function start()
{
    document.getElementById("textbox").innerHTML="";
    recognition.start();
}

recognition.onresult=function(event)
{
    console.log(event);
    var Content=event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML=Content;
    console.log(content);
    speak();
}

function speak()
{
    var synth= window.speechSynthesis;
    speak_data=document.getElementById("textbox");

    var utterThis= new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    Webcam.attach(camera);

    setTimeout(function(){
        var img_id=selfie1;
        take_snapshot();
        speak_data="Taking your selfie in 10 seconds";
        var utterThis= new speechSynthesis(speak_data);
        synth.speak(utterThis);
    },5000);
}
camera=document.getElementById("camera");

Webcam.set({
    width:360,
    height:250,
    image_format:'png',
    png_quality:90
});

function take_snapshot()
{
    Webcam.snap(function(data_URI){
        document.getElementById("result1").innerHTML='<img id="result1" src="'+data_URI+'">'; 
        document.getElementById("result2").innerHTML='<img id="result2" src="'+data_URI+'">';
        document.getElementById("result3").innerHTML='<img id="result3" src="'+data_URI+'">';
    })
}