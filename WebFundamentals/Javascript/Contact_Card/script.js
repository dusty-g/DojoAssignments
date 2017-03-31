function card_click_handler(count){
    $("#card"+count+", #description"+count+"").click(function(){
        // event.stopPropagation();
        var dataValue= $(this).attr("data-value");
        var type = $(this).attr("data-type");
        var altValue = $(this).attr("data-alt-class");
        var thisClass = $(this).attr("class");
        $(this).attr("data-alt-class", thisClass+"");
        $(this).attr("class", ""+altValue);
        swapper(dataValue, type);
    });
}


function swapper(dataValue, type){
    
        
        var altValue = $("#"+type+dataValue).attr("data-alt-class");
        $("#"+type+dataValue).attr("data-alt-class", $("#"+type+dataValue).attr("class"));
        $("#"+type+dataValue).attr("class", altValue+"");
        
}




$(document).ready(function(){
    var count = 1;

    console.log(count);
    
    $(document).on("click", "button", function(){
        $(".cards").append('<div class="card'+count+'"> <div class="visible" data-value="'+count+'" data-type="description" data-alt-class="hidden" id="card'+count+'"> <h1></h1> <h5>Click for description...</h5> </div> <div class="hidden" data-value="'+count+'" data-alt-class="visible" data-type="card" id="description'+count+'"> <p></p> </div>');
        
        card_click_handler(count);



        var name = $("input[name='firstname']").val()+" "+$("input[name='lastname']").val();
        $("#card"+count+" h1").text(name);
        
        var paragraph = $("textarea").val();
        $("#description"+count+" p").text(paragraph);
        
        // card_click_handler();
        count++;
        

        
        return false;
        
    });
    // $(document).on("click", ".visible", function(){
        
    //     card_click_handler();
       
    // });





});
