 $(function(){
            
    $("#boto").on('click',function(){
      var resu=$("#respuest").val().toLowerCase();
             
   
    if ( resu =="asexual y sexual")
    
        $("#resultad").html("correcto");
        else
          $("#resultad").html("No es correcto");   
    
    }); 
    
    });