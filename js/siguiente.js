    
function validarTextos(){
    var band = true;
    var boton=document.getElementById("btn");
    var nombre= document.getElementById("nom").value;
     var elem=document.getElementById("nom");   
        
        if(nombre == ""){
        elem.style.backgroundColor="#76ff00";
        elem.focus();
            band = false;
        }else{
    elem.style.backgroundColor="";
            
      }

var apellido=document.getElementById("ape").value;
var elemt=document.getElementById("ape");
    if(apellido == ""){
    elemt.style.backgroundColor="#76ff00";
    band = false;
    }else{
    elemt.style.backgroundColor="";
    }
    
var Edad= document.getElementById("ed").value;
     var elem=document.getElementById("ed");  
    
    if((Edad == "")||(isNaN(Edad))){
        elem.style.backgroundColor="#76ff00";
        band = false;
        }else{
    elem.style.backgroundColor="";    
        
        }        
var elem1=document.getElementById("sex1");
    var elem2=document.getElementById("sex2");
    var mensaje=document.getElementById("msj");
    elem1.checked 
    
    if(!(elem1.checked)&& !(elem2.checked)){
    mensaje.innerHTML="Debes elegir tu sexo";
        mensaje.style.display="block";
        mensaje.style.color="red";
    band = false;
    }else{
    mensaje.style.display="none";
    }
    
    
if(band){
boton.style.display="block";
}

}
    