$(document).ready(function(){
    $.get("http://anapioficeandfire.com/api/houses/", function(data){
        console.log(data);
    });
    $(".house").click(function(){
        var id = $(this).attr("id");
        console.log(id);
        var houseUrl1 = "http://anapioficeandfire.com/api/houses/";
        $.get(houseUrl1+""+id, function(data){
            console.log(data);
            $("#name").text("");
            $("#words").text("");
            $("#titles").text("");

            $("#name").append(data.name);
            $("#words").append(data.words);
            for(var i = 0; i < data.titles.length; i++){
                $("#titles").append(data.titles[i]);
            }

            

        }, "json");

    });



});