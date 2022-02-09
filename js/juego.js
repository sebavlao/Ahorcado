import {alerta} from "./sweet-alert2.js";

const imagenes = document.getElementById("imagenes");

let vidasCount = 6;

document.getElementById("vidas").innerHTML="Vidas: " + vidasCount;



if (vidasCount === 6) {
    imagenes.style.backgroundImage = "url('./img/cuerpo/horca.png')";
} else if (vidasCount === 5) {
    imagenes.style.backgroundImage = "url('./img/cuerpo/cuerpo-cabeza.png')";
} else if (vidasCount === 4) {
    imagenes.style.backgroundImage = "url('./img/cuerpo/cuerpo-torso.png')";
} else if (vidasCount === 3) {
    imagenes.style.backgroundImage = "url('./img/cuerpo/cuerpo-brazo.png')";
} else if (vidasCount === 2) {
    imagenes.style.backgroundImage = "url('./img/cuerpo/cuerpo-brazos.png')";
} else if (vidasCount === 1) {
    imagenes.style.backgroundImage = "url('./img/cuerpo/cuerpo-pierna.png')";
} else if (vidasCount === 0) {
    imagenes.style.backgroundImage = "url('./img/cuerpo/cuerpo.png')";
    alerta();
}
    






