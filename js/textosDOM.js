$(document).ready(function(){
    //console.log($('a').lenght);

    reloadLinks();


    $('addbtn').removeAttr('disabled')
               .click(function(){

       /*console.log($("#addlink").val());
        $('#menu').html('<li><a href="' + $("#addlink").val() + '"></a><li>');
        $('#menu').append('<li><a href="' + $("#addlink").val() + '"></a><li>');
        $('#menu').before('<li><a href="' + $("#addlink").val() + '"></a><li>');*/


        $('#menu').prepend('<li><a href="' + $("#addlink").val() + '"></a><li>');
        $("#addlink").val('');
        reloadLinks();
    });
});

function reloadLinks(){
    
    $('a').each(function(index){
        
        var that = $(this);
        var enlaces = that.attr("href");
        
        that.attr('target','blank');
        // that.removeAttr();

        that.text(enlaces);
    });
}