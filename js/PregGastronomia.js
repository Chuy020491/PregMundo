 $(function(){
            
    $("#bot").on('click',function(){
      var resul=$("#respues").val().toLowerCase();
             
   
    if ( resul =="pasas")
    
        $("#resulta").html("correcto");
        else
          $("#resulta").html("No es correcto");   
    
    }); 
    
    });