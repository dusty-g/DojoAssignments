$(document).ready(function(){
    $("img").hover(function(){
        var temp = $(this).attr("src");
        var altTemp =$(this).attr("data-alt-src");
        
        $(this).attr("src", altTemp);
        
        $(this).attr("data-alt-src", temp);}, 
        function(){
        var temp = $(this).attr("src");
        
        var altTemp =$(this).attr("data-alt-src");
        $(this).attr("src", altTemp);
        $(this).attr("data-alt-src", temp);
        }
        );
});