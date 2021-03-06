$(document).ready(function(){
    var row = 1;
    var pokedex = 1;
    var temp1= "<img id='";
    var temp2= "' src='http://pokeapi.co/media/img/";
    var end = ".png'>";
    var divHTML1 = "<div class='row' id='row-";
    var divHTML2 = "'></div>"
    var pokeurl1 = "http://pokeapi.co/api/v2/pokemon/";
    //fifteen rows with 10 elements in each row
    //add the last 151st pokemon manually
    //
    //make sure to change i<2 to i<16 
    var count = 0;
    for(var i = 1; i<16; i++){
        
        for(var j = 0; j<10; j++){
            console.log("count at beginning of loop:  " + count);
            $.get(pokeurl1+pokedex+"/", function(data){
                console.log("loop # (inside the $get): " + count);
                console.log("pokemon # is: "+data.id);
                console.log("pokedex counter: "+pokedex);
                console.log("pokemon height is: "+data.height*10);
                
                $("#row-"+1).append(temp1+data.id+temp2+data.id+end);
                
                $("#"+data.id).css("height", ""+data.height*10);
                $("#"+data.id).css("width", ""+data.height*10);
                
            }, "json");
            
            
            console.log("count at end of loop: "+count);
            count++;

            pokedex++;
        }
        row++;


        // $("h1").next().append(temp+i+".png'>");
        // console.log(temp+i);
    }
    
    // $(".container").append(divHTML1+row+divHTML2);
    // $("#row-"+row).append(temp1+pokedex+temp2+pokedex+end);
    
    
    $(".container").on("click", "img", function(){
        var id = $(this).attr("id");
        var pokeurl1 = "http://pokeapi.co/api/v2/pokemon/";
        
        $.get(pokeurl1+id+"/", function(data){
            console.log(data);
            
            //clear the info box
            $(".info").html("");


            
            //html saved as variables to make things less messy
            var types1 = "<h4>Types</h4><ul>";
            var types2 = "</ul>";
            var height1 = "<h4>Height</h4><p>";
            var height2 = "</p>";
            var weight1 = "<h4>Weight</h4><p>";
            var weight2 = "</p>";

            //add the h1 tag with the pokemon name and picture
            $(".info").append("<h1>"+data.name+"</h1>");
            $(".info").append(temp1+id+temp2+id+end);
            //add the pokemon types using a for loop
            $(".info").append(types1);
            for(var i = 0; i < data.types.length; i++){
                $(".info").append("<li>"+data.types[i].type.name+"</li>");
            }
            $(".info").append(types2);
            
            //add height
            $(".info").append(height1+data.height+height2);
            //add weight
            $(".info").append(weight1+data.weight+weight2);

        }, "json");
        

        console.log("it's working. this id = "+id);
    });

    
});