const espaceMessage = document.getElementById("message");

const bouton = document.getElementById("bouton");

const ageInput = document.getElementById("age");

const parentalInput = document.getElementById("parental");

var input = document.getElementById("age");

let age;
let isControlParentalActive;
let ageMajorite = 18;

function valider() {
        espaceMessage.innerHTML = "Vous êtes autorisé à entrer";
    }
    
function refuser() {
    espaceMessage.innerHTML= "Cette espace est interdit aux mineurs";
    }
    
function onConfirm(){
    age = parseInt(ageInput.value);
        
    //Si la saisie n'est pas un nombre, on affiche un message d'erreur
    if(isNaN(age)) {
        alert("Ceci n'est pas un nombre");
        return;
    }
    //On récupère la valeur du checkbox de contrôle parentale. "true" si coché ou "false" si décoché
    isControlParentalActive = parentalInput.checked;


    if(age < ageMajorite && isControlParentalActive){
        refuser();
    }else{
        valider()
    }
    //On vide ici le champ de saisie
    ageInput.value = " ";

    } //la function onConfirme s'arrête ici 


/*On écoute l'action de click sur le bouton et on
appelle la fonction onConfirm */

bouton.addEventListener("click", onConfirm);


// maintenant on peut valider le formulaire on appuyant sur la touche Enter
// le chiffre 13 est le code de charactère de la touche Enter

input.addEventListener("keyup", (event) =>{
    if (event.keyCode === 13) {
        document.getElementById("bouton").click();
    }
})