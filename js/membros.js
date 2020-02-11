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

readTextFile("./images/membros/membros.json", function(text)
{
    $(document).ready(function(){
        var img_folder = "/images/membros/";
        var fileExt = ".jpg";
        var fileExtUpper = ".JPG";
        var json_folder = "/images/membros";
        var jsonExt = ".json";
        var jsonExtUpper = ".JSON";
        var i = 0;
        var nome = "nulo";
        var categoria = "nula";

        $.get(img_folder, function(data) 
        {

            $(data).find("a:contains(" + fileExt + "), a:contains(" + fileExtUpper + ")").each(function () {

                member_info = document.createElement('div');
                $(member_info).addClass("col-md-6 col-lg-3 mb-4 aos-init aos-animate");
                $(member_info).attr("data-aos","fade-up");
                $(member_info).attr("data-aos-delay","300");

                member_info_class = document.createElement('div');
                $(member_info_class).addClass('team-member');

                member_figure_info = document.createElement('figure');
                /*
                member_info_list = document.createElement('ul');
                $(member_info_list).addClass('social');

                $(member_info_list).append($('<li>').append($('<a>').attr('href', '#')
                                                            .append($('<span>').addClass('icon-facebook'))));

                $(member_info_list).append($('<li>').append($('<a>').attr('href', '#')
                                                            .append($('<span>')).addClass('icon-twitter')));
                
                $(member_info_list).append($('<li>').append($('<a>').attr('href', '#')
                                                            .append($('<span>').addClass('icon-linkedin'))));

                $(member_info_list).append($('<li>').append($('<a>').attr('href', '#')
                                                            .append($('<span>').addClass('icon-instagram'))));
                */
                member_img = document.createElement('img');
                $(member_img).attr('src', img_folder + $(this).text());
                $(member_img).attr('alt', "Image");
                $(member_img).addClass('img-fluid');


                var dados = JSON.parse(text);
                member_name = document.createElement('div');
                $(member_name).addClass('p-3');
                $(member_name).append($("<h3>"+dados[i].nome+"</h3>"));
                $(member_name).append($("<span><span>").addClass("position").attr('tkey',dados[i].categoria));


                // $(member_info_list).appendTo(member_figure_info);
                $(member_img).appendTo(member_figure_info);
                $(member_figure_info).appendTo(member_info_class);
                $(member_name).appendTo(member_info_class);
                $(member_info_class).appendTo(member_info);
                $(member_info).appendTo('#team-member-images');

                i++;
            });
        });

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