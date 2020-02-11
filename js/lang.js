
var langs = ['en', 'pt'];
var langCode = '';
var langJS = null;

var pt = document.getElementById('pt')
var en = document.getElementById('en')

pt.addEventListener("click", () => {
	langCode = 'pt';
	$.getJSON('lang/'+langCode+'.json',translate);
	localStorage.setItem('lang','pt')
})

en.addEventListener("click", () => {
	langCode = 'en'
	$.getJSON('lang/'+langCode+'.json',translate);
	localStorage.setItem('lang','en')
})

function translate (jsdata)
{	
	$("[tkey]").each (function (index)
	{
		var strTr = jsdata [$(this).attr ('tkey')];
	    $(this).html (strTr);
	});
}

let cookieLang = localStorage.getItem('lang')
langCode = cookieLang

if (langCode === ''){
	langCode = navigator.language.substr (0, 2);
}else if(langs.includes(langCode)){
	$.getJSON('lang/'+langCode+'.json', translate);
}else
	$.getJSON('lang/en.json', translate);
