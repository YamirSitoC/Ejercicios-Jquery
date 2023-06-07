
$(document).ready(function(){

    // MouseOver y MouseOut
    var box = $("#box");

    /*box.mouseover(function(){
        $(this).css("background","pink");
    });

    box.mouseout(function(){
        $(this).css("background","blue");
    });*/

    function cambiaRosa(){
        $(this).css("background","pink");
    }
    function cambiaAzul(){
        $(this).css("background","blue");
    }

    // Hover
    box.hover(cambiaRosa,cambiaAzul);

    // click
    box.click(function(){
        $(this).css("background","red")
               .css("color","white");
    });
    // click
    box.dblclick(function(){
        $(this).css("background","orange")
               .css("color","black");
    });

    // focus y blur 
    var name = $("#name");
    var datos = $("#datos");

    name.focus(function(){
        $(this).css("border","2px solid green");
    });

    name.blur(function(){
        $(this).css("border","1px #ccc");
        // $(this).val();
        //$("#datos").text($(this).val()).show();
        datos.text($(this).val()).show();

    });

    // Mousedown y MouseUp
    datos.mousedown(function(){
        $(this).css("border color","gray");
    });

    datos.mouseup(function(){
        $(this).css("border color","black");
    });

    // Mousemove
    $(document).mousemove(function(){
        $('body').css("cursor","none");
        $("#sigueme").css("left", event.clientX)
                     .css("top", event.clientY);

        /*console.log("En coordenadas X: " + event.clientX);
        console.log("En coordenadas Y: " + event.clientY);
        var sigueme = $("#sigueme");
        sigueme.css("left", event.clientX);
        sigueme.css("top", event.clientY);*/

    });

});