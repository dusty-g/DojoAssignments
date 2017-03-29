$(document).ready(function(){
    
    $(".header").slideDown("slow");
    $(".blue").click(function(){
        $(this).hide(400);
    })
    $("button").click(function(){
        $(".blue").show(400);
    })
    


});