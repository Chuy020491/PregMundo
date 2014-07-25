 $(function(){
            
    $("#btn").on('click',function(){
      var result=$("#resp").val().toLowerCase();
             
   
    if ( result =="tetsuro tori")
    
        $("#resul").html("correcto");
        else
          $("#resul").html("No es correcto");   
    
    }); 
    
    });
    