
var langs = ['en', 'pt'];
var langCode = '';
var langJS = null;

function setPT(){
	langCode = "pt"
	$.getJSON('lang/'+langCode+'.json',translate);
	localStorage.setItem('lang','pt')
}

function setEN(){
	langCode = "en"
	$.getJSON('lang/'+langCode+'.json',translate);
	localStorage.setItem('lang','en')
}

function translate (jsdata)
{	
	$("[tkey]").each (function (index)
	{
		var strTr = jsdata [$(this).attr ('tkey')];
	    $(this).html (strTr);
	});
}

$(document).ready(function(){

	$("#pt").on("click touchstart", (e) => {
		e.preventDefault();
		
		langCode = 'pt';
		$.getJSON('lang/'+langCode+'.json',translate);
		localStorage.setItem('lang','pt')
	});
	
	$("#en").on("click touchstart", (e) => {
		e.preventDefault();
		langCode = 'en'
		$.getJSON('lang/'+langCode+'.json',translate);
		localStorage.setItem('lang','en')
	});

	let cookieLang = localStorage.getItem('lang')
	langCode = cookieLang

	if (langCode === ''){
		langCode = navigator.language.substr (0, 2);
	}else if(langs.includes(langCode)){
		$.getJSON('lang/'+langCode+'.json', translate);
	}else
		$.getJSON('lang/en.json', translate);
})