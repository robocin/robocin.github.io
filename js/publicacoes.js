$(document).ready(function(){
    var folder = "/archives/";
    var fileExt = ".pdf";
    var fileExtUpper = ".PDF";
    var first_year = 3020;
    var append_list = null;

    $.get(folder, function(data) 
    {

        tdp_list = $(data).find("a:contains(" + fileExt + "), a:contains(" + fileExtUpper + ")");
        tdp_list = Object.assign([], tdp_list).reverse();
        tdp_list.forEach(function (elem) {

            tdp_info = document.createElement('li');

            var name = elem.text.split('.')[0].split('_');
            tdp_link = document.createElement('a');
            $(tdp_link).attr("href", folder + elem.text);
            $(tdp_link).attr("target", "blank");
            tdp_title = document.createElement('div');
            $(tdp_title).addClass("p-3")
            tdp_text = document.createElement('h5');
            $(tdp_text).text(name[1] + " " + name[2] + " " + name[3]);

            if (name[0] < first_year) {
                if (append_list != null) {
                    $(append_list).appendTo(div_year);
                    $(div_year).appendTo('#tdp-list');
                }
                div_year = document.createElement('div');
                $(div_year).addClass('col-12');
                year_title = document.createElement('h3');
                $(year_title).text(name[0]);
                $(year_title).appendTo(div_year);
                append_list = document.createElement('ul');
                $(append_list).attr("style", "list-style-type:none;");
                first_year = name[0];
            }


            $(tdp_text).appendTo(tdp_title);
            $(tdp_title).appendTo(tdp_link);
            $(tdp_link).appendTo(tdp_info);
            $(tdp_info).appendTo(append_list);
        });
        $(append_list).appendTo(div_year);
        $(div_year).appendTo('#tdp-list');
    });
});