// $ = siempre se refiere al objeto de Jquery en general
$(document).ready(function(){
    // selector de ID
    $("#rojo").css("background","red")
              .css("color","white");
    // console.log(rojo);

    $("#amarillo").css("background","yellow")
                  .css("color", "green");

    $("#azul").css("background","blue")
              .css("color","black");

    // selectores de clases
    var colores = $('.cebra').css("padding","5px");
    
    /*console.log(colores[0]);
    console.log(colores.eq(0));*/

    //colores.css("border","5px dashed black");

    $('.sin_borde').click(function(){
        //$(this).css("border","none");
        console.log("Le has dado click");

        $(this).addClass('cebra');
    });

    // selectores por etiquetas 

    var parrafos = $('p').css("cursor","pointer");
    parrafos.click(function(){

        var that = $(this);

        if(that.hasClass('grande')){
            //$(this).removeClass('cebra');
            that.addClass('grande');
        }
        else{
            that.removeClass('grande');
        }
    });

    // Selectores de atributos

    $('[title="Google"]').css('background','#ccc');
    $('[title="Youtube"]').css('background','#ccc');

    // otros
   // $('p, a').addClass('margen-superior')

    //var busqueda = $("#box").find('.resaltado');
    //var busqueda = $("#box .resaltado").eq(0).parent().parent().parent().find('[title="Google"]');
    
    var busqueda = $("#elemento2").parent().parent().find('.resaltado');

    console.log(busqueda);

});