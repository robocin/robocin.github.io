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

readTextFile("https://robocin.com.br/json/papers.json", function(text)
{
    $(document).ready(function(){
        var first_year = 3020;
        var append_list = null;
        var i = 0;

        tdp_list = JSON.parse(text);
        for(i = 0; i < tdp_list.length; i++){

            tdp_info = document.createElement('li');
            tdp_link = document.createElement('a');
            $(tdp_link).attr("href", tdp_list[i].path);
            $(tdp_link).attr("target", "blank");
            tdp_title = document.createElement('div');
            $(tdp_title).addClass("p-3")
            tdp_text = document.createElement('h5');
            $(tdp_text).text(tdp_list[i].name);


            if (tdp_list[i].name.substr(0, 4) < first_year) {
                if (append_list != null) {
                    $(append_list).appendTo(div_year);
                    $(div_year).appendTo('#tdp-list');
                }
                div_year = document.createElement('div');
                $(div_year).addClass('col-12');
                year_title = document.createElement('h3');
                $(year_title).text(tdp_list[i].name.substr(0, 4));
                $(year_title).appendTo(div_year);
                append_list = document.createElement('ul');
                $(append_list).attr("style", "list-style-type:none;");
                first_year = tdp_list[i].name.substr(0, 4);
            }

            $(tdp_text).appendTo(tdp_title);
            $(tdp_title).appendTo(tdp_link);
            $(tdp_link).appendTo(tdp_info);
            $(tdp_info).appendTo(append_list);

            $(append_list).appendTo(div_year);
            $(div_year).appendTo('#tdp-list');
        }
    });
});