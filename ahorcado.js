const words = ["angulo", "papa", "mandioca", "regadera", "refrigerador", "tacho", "chatarra", "plato", "teclado", "gabinete"];

const wordsAleatorio = words[Math.floor(Math.random()*words.length)];


const agregarPalabra = document.querySelector("#nueva-palabra")

agregarPalabra.addEventListener("click", () => {
 const word = document.getElementById("input-nueva-palabra");
 const newWords = word.value.trim();

 if(word.value.trim() == "") {
    console.error(new Error("chupala, pete"));
 } else {
     words.push(newWords);
 }

 word.value = ""
});
   