var Hello = "Hello";
var userSelection = document.getElementById("selectMe").value;
var ilibtutorial_it_IT = 
{
	Hello : "Hola"
};

var ilibtutorial_fr_FR = 
{
	Hello : "Bonjour"
};

ilib.data.ilibtutorial_it_IT = ilibtutorial_it_IT;
ilib.data.ilibtutorial_fr_FR = ilibtutorial_fr_FR;

res = new ilib.ResBundle({
 locale: userSelection,	
 name: "ilibtutorial"
});


a.innerHTML = res.getString("Hello");
b.innerHTML = res.getString("Hello");
