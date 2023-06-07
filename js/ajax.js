$(document).ready(function(){

    /* Evento load
    $("#datos").load("https://reqres.in/"); // peticion de una URL por medio de GET*/
    
    // metodo GET y POST
    $.get("https://reqres.in/api/users",{page: 2}, function(response){
        // console.log(response);
        response.data.forEach((element, index) =>{
            $("#datos").append("<p>" + element.first_name + " " + element.last_name + "<p/>");
        });
    });

    /*var user = {
        name: "Yamir Castro",
        web: "yamircastro.es"
    }

    $.post("https://reqres.in/api/users", user, function(response){
        console.log(response);
    }); */

    $("#form").submit(function(e){

        e.preventDefault();

        var user = {
            name: $('input[name="name"]').val(),
            web: $('input[name="web"]').val()
        }
           

        /*$.post($(this).attr("action"),user,function(response){
            console.log(response);
        }).done(function(){
            alert("Usuario añadido correctamente");
        });*/



        $.ajax({
            type: 'POST',

            // dataType: 'json',
            // contenType: 'application/json',

            url: $(this).attr("action"),
            data: user,
            beforeSend: function(){
                console.log("Enviando usuario...");
            },
            sucess: function(response){
                console.log(response);
            },
            erro: function(){
                console.log("Ha ocurrido un error");
            },
            timeout: 1000
        });

        return false;
    });

});