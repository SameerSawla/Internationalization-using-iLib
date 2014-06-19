var a = document.getElementById('divOne');
var b = document.getElementById('divTwo');


var res = new ilib.ResBundle({
 locale: "it-IT",	
 name: "ilibtutorial"
});


var res2 = new ilib.ResBundle({
 locale: "fr-FR",	
 name: "ilibtutorial"
});



a.innerHTML = res.getString("Hello");
b.innerHTML = res2.getString("Hello");