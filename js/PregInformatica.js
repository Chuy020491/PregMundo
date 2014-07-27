 $(function(){
            
    $("#boton").on('click',function(){
      var res=$("#respuesta").val().toLowerCase();
        var pun="";cont=1
        Cal=$("#Calif")
             
   
    if ( res =="steve jobs")
   
        $("#resultado").html("correcto");
         
        else
          $("#resultado").html("No es correcto");   
    
    }); 
    
    });
    

function contadorTiempo()
{
	var timer = $("#timer").html();
	timer++;
	$("#timer").html("" + timer);
	if (found<10)
	{
		timerId = setTimeout('contadorTiempo()', 1000);
	}
}
 