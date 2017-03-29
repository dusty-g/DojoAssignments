$(document).ready(function(){
    
    
   $("img").click(function(){
        var temp = $(this).attr("src");
        console.log(temp);
        var altTemp =$(this).attr("data-alt-src");
        $(this).attr("src", altTemp);
        $(this).attr("data-alt-src", temp);
    })

});