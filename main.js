function startClaasification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('' , modelReady);
}
function gotResult(error , results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        random_number_r = Math.floor(Math.random()*255)+1;
        random_number_g = Math.floor(Math.random()*255)+1;
        random_number_b = Math.floor(Math.random()*255)+1;
        

        document.getElementById("results_label").innerHTML = 'I can hear - '+ results[0].label;
        
        document.getElementById("results_confidence").innerHTML = 'Accuracy - '+ (results[0].confidence*100).toFixed(2)+" %";
        
        document.getElementById("results_label").style.color = "rgb("+random_number_r"
        
    }
}
