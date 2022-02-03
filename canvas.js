// var canvas = document.querySelector("canvas");
// var context = canvas.getContext("2d");
// context.fillStyle = "red";
// context.fillRect(20, 20, 100, 50);

var pencil = document.querySelector("canvas")
var pieD = pencil.getContext("2d");
pieD.strokeStyle = "green"
pieD.beginPath();
pieD.moveTo(200, 650);
pieD.lineTo(150, 700);
pieD.stroke();
pieD.closePath();


var pieI = pencil.getContext("2d");
pieI.strokeStyle = "green"
pieI.beginPath();
pieI.moveTo(200, 650);
pieI.lineTo(250, 700);
pieI.stroke();
pieI.closePath();


var cuerpo = pencil.getContext("2d");
cuerpo.strokeStyle = "green"
cuerpo.beginPath();
cuerpo.moveTo(200, 650);
cuerpo.lineTo(200, 500);
cuerpo.stroke();
cuerpo.closePath();


var brazoI = pencil.getContext("2d");
brazoI.strokeStyle = "green"
brazoI.beginPath();
brazoI.moveTo(200, 550);
brazoI.lineTo(250, 500);
brazoI.stroke();
brazoI.closePath();


var brazoD = pencil.getContext("2d");
brazoD.strokeStyle = "green"
brazoD.beginPath();
brazoD.moveTo(200, 550);
brazoD.lineTo(150, 500);
brazoD.stroke();
brazoD.closePath();


var cabeza = pencil.getContext("2d");
cabeza.beginPath();
cabeza.arc(200, 475, 25, 0, Math.PI*2, true);
cabeza.stroke();
cabeza.closePath();










function horca(){
    var base = pencil.getContext("2d");
    base.strokeStyle = "green"
    base.beginPath();
    base.moveTo(400, 750);
    base.lineTo(420, 770);
    base.lineTo(380, 770);
    base.lineTo(400, 750);
    base.stroke();
    base.closePath();

    var estructuraR = pencil.getContext("2d");
estructuraR.strokeStyle = "green"
estructuraR.beginPath();
estructuraR.moveTo(400, 420);
estructuraR.lineTo(400, 750);
estructuraR.stroke();
estructuraR.closePath();

var cuerda = pencil.getContext("2d");
cuerda.strokeStyle = "green"
cuerda.beginPath();
cuerda.moveTo(200, 450);
cuerda.lineTo(200, 420);
cuerda.stroke();
cuerda.closePath();


var estructuraA = pencil.getContext("2d");
estructuraA.strokeStyle = "green"
estructuraA.beginPath();
estructuraA.moveTo(200, 420);
estructuraA.lineTo(400, 420);
estructuraA.stroke();
estructuraA.closePath();
}

// var word= pencil.getContext("2d");
// word.beginPath()
// fillText("Hola Mundo",50,50)
// word.closePath()