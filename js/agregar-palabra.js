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