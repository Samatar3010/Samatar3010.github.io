//Sélecteur

let plus = document.getElementById("plus")
let moins = document.getElementById("moins")
let reset = document.getElementById("reset")
let compteur = document.getElementById("compteur")

// Variables
let count = 0

//Fonction

//Utiliser par les anciens
function increment() {
    count++;
    compteur.innerText = count;
    checkColor()
}
const decrement = function() {
    count--;
    compteur.innerText= count;
    checkColor()
}
//=> à la mode mais subtilité avec le This
const resetNumber = () => {
    count = 0
    compteur.innerText = count
    checkColor()
}
function checkColor(){
    if(count >= 0) {
        compteur.style.color ="blue"
    }
    else {
        compteur.style.color ="red"
    }
}

// Evènement + je call la fonction après l'avoir initialisée

plus.addEventListener("click", increment)
moins.addEventListener("click", decrement)
reset.addEventListener("click",resetNumber)
