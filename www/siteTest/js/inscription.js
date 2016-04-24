$(document).ready(function() {
	var errorMessages = ["Veuillez spécifier votre pseudo. Ce dernier doit contenir au moins 4 caractères.",
    "Votre adresse mail doit être au format mail@domaine.com par exemple.",
    "Votre mot de passe doit être constitué d'au moins 6 caractères",
    "Vous avez entrez deux mots de passe différents. Vérifiez votre saisie."
    ];

    var inputs = $('#form-inscription input');
    var index = 0;
    for (var i in inputs) {
    	var elem = inputs[i];
        elem.oninvalid = function(e) {
            e.target.setCustomValidity("");
            if (!e.target.validity.valid) {
                console.log(errorMessages[e.target.id])
                e.target.setCustomValidity(errorMessages[e.target.id]);
            }
        };
    }
})
