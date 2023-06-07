$(document).ready(function(){

    // Mover elemento por la pagina 
    $('.elemento').draggable();

    // Redimencionar 
    $('.elemento').resizable();

    // Seleccionar y Organizaar elementos
    // $(".lista_seleccionable").selectable();
    $(".lista_seleccionable").sortable({
        update: function(event, ui){
            console.log("Ha cambiado la lista");
        }
    });

    // Drop
    $("#elemento_movido").draggable();
    $("#area").droppable({
        drop: function(){
            console.log("Haz soltado algo dentro de el area");
        }
    });

    // Efectos
    $("#mostrar").click(function(){
        // $(".box-efectos").effect("explode");
        // $(".box-efectos").toggle("explode");
        // $(".box-efectos").toggle("slide");
        // $(".box-efectos").toggle("blinck");
        // $(".box-efectos").toggle("drop");
        // $(".box-efectos").toggle("fold");
        // $(".box-efectos").toggle("puff");
        // $(".box-efectos").toggle("scale"); 
        $(".box-efectos").toggle("shake", 4000);
    });

    // Tooltip
    $(document).tooltip();

    // Dialog
    $("lanzar-popup").click(function(){
        $("#popup").dialog();
    });

    // DatePicker
    $("#calendario").datepicker();

    // Tabs
    $("#pestanas").tabs();
});