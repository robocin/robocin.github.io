function translate (jsdata)
{	
	$("[tkey]").each (function (index)
	{
		var strTr = jsdata [$(this).attr ('tkey')];
	    $(this).html (strTr);
	});
}

function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}

readTextFile("https://robocin.com.br/json/membros.json", function(text)
{
    $(document).ready(function(){
        var i = 0;

        var dados = JSON.parse(text);

        for(i = 0; i < dados.length; i++){
            var social_network = false;
            member_info = document.createElement('div');
            $(member_info).addClass("col-md-6 col-lg-3 mb-4 aos-init aos-animate");
            $(member_info).attr("data-aos","fade-up");
            $(member_info).attr("data-aos-delay","300");

            member_info_class = document.createElement('div');
            $(member_info_class).addClass('team-member');

            member_figure_info = document.createElement('figure');

            member_img = document.createElement('img');
            $(member_img).attr('src', dados[i].caminho);
            $(member_img).attr('alt', "Image");
            $(member_img).addClass('img-fluid');

            member_name = document.createElement('div');
            $(member_name).addClass('p-3');
            $(member_name).append($("<h3>"+dados[i].nome+"</h3>"));
            $(member_name).append($("<span><span>").addClass("position").attr('tkey',dados[i].categoria));

            member_info_list = document.createElement('ul');
            $(member_info_list).addClass('social');

            if (dados[i].facebook) {
                $(member_info_list).append($('<li>').append($('<a>').attr('href', dados[i]['facebook'])
                                    .attr("target", "_blank").append($('<span>').addClass('icon-facebook'))));
                social_network = true;
            }
    
            if (dados[i].twitter) {
                $(member_info_list).append($('<li>').append($('<a>').attr('href', dados[i]['twitter'])
                                    .attr("target", "_blank").append($('<span>')).addClass('icon-twitter')));
                social_network = true;
            }
            
            if (dados[i].linkedin) {
                $(member_info_list).append($('<li>').append($('<a>').attr('href', dados[i]['linkedin'])
                                    .attr("target", "_blank").append($('<span>').addClass('icon-linkedin'))));
                social_network = true;
            }
    
            if (dados[i].instagram) {
                $(member_info_list).append($('<li>').append($('<a>').attr('href', dados[i]['instagram'])
                                    .attr("target", "_blank").append($('<span>').addClass('icon-instagram'))));
                social_network = true;
            }

            if (dados[i].github) {
                $(member_info_list).append($('<li>').append($('<a>').attr('href', dados[i]['github'])
                                    .attr("target", "_blank").append($('<span>').addClass('icon-github'))));
                social_network = true;
            }

            if (social_network) {
                $(member_info_list).appendTo(member_figure_info);
            }
            $(member_img).appendTo(member_figure_info);
            $(member_figure_info).appendTo(member_info_class);
            $(member_name).appendTo(member_info_class);
            $(member_info_class).appendTo(member_info);
            $(member_info).appendTo('#team-member-images');
        }

        let cookieLang = localStorage.getItem('lang')
        langCode = cookieLang

        if (langCode === ''){
            langCode = navigator.language.substr (0, 2);
        }else if(langs.includes(langCode)){
            $.getJSON('lang/'+langCode+'.json', translate);
        }else
            $.getJSON('lang/en.json', translate);


    });
});