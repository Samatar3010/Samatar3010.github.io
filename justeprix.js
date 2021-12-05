function main() {
    var niveau, justePrix, proposition, nombreTentatives, max;
    var rejouer;
    
    do {    /* L'instruction do...while crée une boucle qui exécute une instruction jusqu'à ce qu'une condition
            de test ne soit plus vérifiée. La condition est testée après que l'instruction soit exécutée,
            le bloc d'instructions défini dans la boucle est donc exécuté au moins une fois.*/ 
        
        // Afficher le menu
        window.alert("Choisissez votre niveau : ");
        window.alert("1 = facile : entre 1 et 10 ");
        window.alert("2 = moyen : entre 1 et 100");
        window.alert("3 = difficile : entre 1 et 1000 ");
        niveau = window.prompt("Saisissez une valeur d'un niveau");
        
        // Sécuriser le niveau
        while (niveau < 1 || niveau > 3) {
            window.alert("Erreur : niveau inconnu! Entrez un nombre entre 1 et 3 ");
            niveau = window.prompt("Enter une valeur d'un niveau");
            
            // En fonction du niveau générer le juste prix et afficher
        }
        if (niveau == 1) {
            window.alert("Niveau facile ");
            max = 10;
        } else {
            if (niveau == 2) {
                window.alert("Niveau moyen ");
                max = 100;
            } else {
                window.alert("Niveau difficile ");
                max = 1000;
            }
        }
        justePrix = Math.floor(Math.random() * max) + 1;
        window.alert("Le juste prix est : " + justePrix);
        
        // Boucle pour faire les propositions
        nombreTentatives = 1;
        do {
            window.alert("Entrez votre proposition ");
            proposition = window.prompt('Saisissez une valeur pour la proposition');
            
            // Vérifier que la proposition est dans les bornes
            while (proposition < 1 || proposition > max) {
                window.alert("Erreur : la proposition n'est pas entre les bornes 1 et " + max);
                proposition = window.prompt('Saisissez une valeur pour la proposition');
            }
            if (proposition != justePrix) {
                if (proposition < justePrix) {
                    window.alert("C'est plus ");
                } else {
                    window.alert("C'est moins ");
                }
            }
            nombreTentatives = nombreTentatives + 1;
        } while (justePrix != proposition && nombreTentatives < 10);
        if (justePrix == proposition) {
            window.alert("C'est gagné en " + nombreTentatives + " tentatives");
        } else {
            window.alert("C'est perdu! Le juste prix était : " + justePrix);
        }
        window.alert("Voulez-vous rejouer ? ");
        rejouer = window.prompt('Enter une valeur pour rejouer');
    } while (rejouer);
    window.alert("Merci et au revoir ");
}

button.addEventListener("load", () => {
    main()
})

/*  Ceci est un teste pour le booléen rejouer

var rejouer = confirm("Voulez-vous rejouer ? ");
if (rejouer == true) {
    alert("Enter une valeur pour rejouer");
}
else {
    alert("Merci et aurevoir")
}
*/

/*  Ceci est une prompt box

var user = prompt("Pleaser enter your name");
alert(user);


*/