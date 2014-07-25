 $(function(){
            
    $("#boton").on('click',function(){
      var res=$("#respuesta").val().toLowerCase();
             
   
    if ( res =="steven job")
    
        $("#resultado").html("correcto");
        else
          $("#resultado").html("No es correcto");   
    
    }); 
    
    });
    
 