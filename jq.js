$(document).ready(function () {
        
    ////-----EJERCICIO 1------ ////////////////////////////////////////////////////////////////////////////////////////////////
           alert("ready  ---> Ejercicio 1");
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
       
    
    ////-----EJERCICIO 2------///////////////////////////////////////////////7//////////////////////////////////////////////////
        
        $("#boton").click(function () { 
            $("#caja").html('<p id="parrafo"class="p-5">Hello world!</p>');
            
        });

    ////////////////////////////////////////////////////////////////7//////////////////////////////////////////////////


    ///-----EJERCICIO 3------/////////////////////////////////////////////////////////////////////////////////////////////////
        
    $("body").append( "<p class= 'p-5 mt-5 bg-primary'>Hola</p>","<p class= 'p-5 bg-primary'>mundo!</p>" );
       
    $("p").addClass("text-justify")

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    
    /////-----EJERCICIO 5-----////////////////////////////////////////////////////////////////////////////////////////////////
       
        $("div>p").each(function(i) {

            let colores = ["red","blue","ghostwhite","yellow"]
            let coloresDos = ["lightblue","salmon","rebeccapurple","tomato"]
            $(this).css("color", colores[i]);
            $(this).css("background-color", coloresDos[i]);
            $(this).css("border", `solid ${colores[i] }`);
        });

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    
    /////-----EJERCICIO 6-----///////////////////////////////////////////////////////////////////////////////////////////////
       
        let contador = 0;
        $('#terms').click(function () {
            contador = contador + 1;
            if (contador%2 != 0 ) {
                $("#boton2").removeAttr("disabled");
            }else{
                $("#boton2").attr("disabled", "disabled");
            }
            
          });

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////    

    ////-----EJERCICIO 7-----////////////////////////////////////////////////////////////////////////////////////////////////

    $('#boton3').click(function(){

        //$("#link").removeAttr("href");
        $('#link').attr("href", "https://es.stackoverflow.com/");
        $('#link').text('ir a StackOverflow');
    })

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////    
        
});







    ///////////////////////////////////////////////////////////////////////////////////////////////



