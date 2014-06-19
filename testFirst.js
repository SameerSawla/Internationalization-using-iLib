var language = window.navigator.userLanguage || window.navigator.language;
alert(language);


function callMe()
{
	// alert("called");
	var script = document.createElement('script');
	script.setAttribute("src","testSecond.js");
	document.getElementsByTagName("head")[0].appendChild(script);
}
