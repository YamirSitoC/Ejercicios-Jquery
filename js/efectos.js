$(document).ready(function(){
    
   var box = $("#box");

   // $("#box").hide();

   /*Efectos con Jquey hacia dos botones: Mostrar y ocultar*/

   $("#mostrar").hide();

    $("#mostrar").click(function(){
        $(this).hide();
        $("#ocultar").show();
        // $("#box").show('fast');
        // $("#box").show('normal');
        // $("#box").fadeIn('slow'); // Hace un fundido
        // $("#box").fadeTo('slow', 0.8);
        box.salideDown('slow');

    });

    $("#ocultar").click(function(){
        $(this).hide();
        $("#mostrar").show();
        // $("#box").hide('fast');
        // $("#box").hide('normal');
        // $("#box").fadeOut('slow'); // Hace un fundido
        // $("#box").fadeTo('slow', 0.2);

        box.slideUp('slow',function(){ // funcion de callback en efectos
            console.log("Cartel ocultado");
        });

    });

    // Boton Todo en uno

    $("#todoenuno").click(function(){
        // $("#box").toggle('fast');
        // $("#box").fadeToggle('fast');
        box.slideToggle('fast'); // despliega el elemento: en este caso el "div"
    });

    $("#animar").click(function(){
        // box.animate({marginLeft:500},'fast')
        box.animate({
            marginLeft:'500px',
            fontSize: '40px',
            height: '100px'
            },'slow')
           .animate({
            borderRadius: '900px',
            marginTop: '100px'
           }, 'slow') 
           .animate({
            borderRadius: '900px',
            marginLeft:'0px'
           })
           .animate({
            borderRadius: '100px',
            marginTop: '0px'
           })
           .animate({
            marginLeft:'500px',
            fontSize: '40px',
            height: '100px'
           })
        ;
    });

});