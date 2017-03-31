var Axel = {
	"nom": "Dupont",
	"prénom": "Axel",
	"âge": 34
};
console.log(Axel.nom);

var Sophie = {
	"nom": "Durand",
	"prénom": "Sophie",
	"âge": 21
};
console.log(Sophie["prénom"]);

var Arthur = {
	"nom": "Legrand",
	"prénom": "Arthur",
	"âge": 46
};
console.log(Arthur["âge"]);

var agenda = {"Axel":Axel, "Sophie":Sophie, "Arthur":Arthur};
console.log(Axel.prénom);

$("button").click(function() {

	$("input").change(function() {

	$("input").append($("agenda").val());
	
	});

});

var annuaire = [];

$("#valider").click(function() {
	var contact1 = $("#firstname").val();
	// console.log(contact1);
	var contact2 = $("#surname").val();
	// console.log(contact2);
	var contact3= $("#old").val();
	// console.log(contact3);

var person = {"nom": contact1, "prenom": contact2, "age":contact3};

annuaire.push(person);

$('input').val(' ');   // efface le texte inscrit dans les inputs automatiquement

$("#liste").append('<tr><td>'+person.nom+'</td><td>'+person.prenom+'</td><td>'+person.age+'</td><td><button class="supr">Delete</button>'); // ajout d'un bouton "Delete".
																																			// <button class="supr">Delete</button>.
});


$('#liste').delegate(".supr", "click", function() {  
	$(this).parent().parent().remove();      // On supprime le parent du parent à partir du bouton "Delete".On part du bouton ".supr"("Delete"), puis 1° parent().=<td> et 2° parent().=<tr>.

										
});

