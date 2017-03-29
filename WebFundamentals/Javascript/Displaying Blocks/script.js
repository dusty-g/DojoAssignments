$(document).ready(function(){
    
    $(".header").slideDown("slow");
    $("#coder2").click(function(){
        $(this).hide(400);
    })
    $("#riddler").hover(function(){
        $(this).toggle(800);
    })
    $("#chell").hover(function(){
        $(this).toggleClass("chell");
    })
    $("#ninja_cat").click(function(){
        $(this).slideUp("fast");
    })
    $("#codercat").click(function(){
        $(".header").slideToggle();
    })
    $("#picard").click(function(){
        $(".wrapper").css("background-image", "url('stars.jpg')");
        $(".header h1").html("&nbsp; &nbsp; Make it so! &nbsp; &nbsp; &nbsp;");
        $(".header h1").css("color", "white");
    })
    $("#mario").click(function(){
        $(".header h1").text("It's a me!");
    })
    $("#drunk").click(function(){
        $("img, h1").toggleClass("blurry");
    })
    $(".pony").click(function(){
       $(this).before("<img src='cooler.png' class='red' width='100px'>");
       $(".wrapper").css("background-image", "url('rainbow.jpg')");
    })
    $("#daft").click(function(){
        $("#row-4 img").attr("src", "daftpunk.gif");
    })


});