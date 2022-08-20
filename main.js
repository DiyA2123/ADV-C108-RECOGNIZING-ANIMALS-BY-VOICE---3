function Identify() {
  navigator.mediaDevices.getUserMedia({ audio: true });
  classifier = ml5.soundClassifier(
    "https://teachablemachine.withgoogle.com/models/KAoLdm3jB/model.json",
    modelReady
  );
}
function modelReady() {
  classifier.classify(gotResults);
}
var dog = 0;
var cat = 0;
var bear = 0;
var duck = 0;

function gotResults(error, results) {
  if (error) {
    console.log(error);
  } else {
    
    random_number_r= Math.floor(Math.random()*255)+1
        random_number_g= Math.floor(Math.random()*255)+1
        random_number_b= Math.floor(Math.random()*255)+1

    console.log(results);
    document.getElementById("object_name").innerHTML= "I can Hear: "+ results[0].label;
    document.getElementById("object_accuracy").innerHTML="Accuracy: "+(results[0].confidence*100).toFixed(2)+"%";

    document.getElementById("object_name").style.color= "rgb("+  random_number_r+","+random_number_g+","+random_number_b+")"
    document.getElementById("object_accuracy").style.color= "rgb("+  random_number_r+","+random_number_g+","+random_number_b+")"

    var img= document.getElementById("display")

    if (results[0].label=="Dog"){
        img.src="65014-dog-walking.gif";
        Dog=Dog+1;
    }

    else if (results[0].label=="Cat"){
        img.src="14592-loader-cat.gif";
        cat=cat+1
    }
    else if (results[0].label=="Bear"){
        img.src="84848-polar-bear.gif";
        Bear=bear+1
    }
    else if (results[0].label=="Duck"){
        img.src="94491-duck-preening.gif";
Duck=Duck+1
    }
  }
}
