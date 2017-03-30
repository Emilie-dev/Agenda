var Axel = {
	"nom": "Dupont",
	"prénom": "Axel",
	"âge": 34
};

var Sophie = {
	"nom": "Durand",
	"prénom": "Sophie",
	"âge": 21
};

var Arthur = {
	"nom": "Legrand",
	"prénom": "Arthur",
	"âge": 46
};

var annuaire = [];

$("#valider").click(function() {
	var contact1 = $("#firstname").val();
	console.log(contact1);
	var contact2 = $("#surname").val();
	console.log(contact2);
	var contact3= $("#old").val();
	console.log(contact3);

var person = {"nom": contact1, "prénom": contact2, "age":contact3};



});




