var resultado = 0;
var texto = 0;
var estado = 0;
var flag = 0;
var first = 0;
var total = 0;

function escribir(value){
    texto = document.getElementById("total");
    if(estado==0){
        if(first == 0){
            texto.value = "";
            first = 1;
        }    
        texto.value= texto.value+value;
    }else if(estado == 6){      
        texto.value = value;
        estado = 0; 
    } else {
        if(flag == 0){
            texto.value="";
            flag=1;
        }
        texto.value+= value; 
    }
}
function porcentaje(){
    texto = document.getElementById("total");
    texto.value = texto.value/100;
}
function borrar(){
    texto = document.getElementById("total");
    texto.value = 0;
    first = 0;
}
function signo(){
    texto = document.getElementById("total");
    texto.value = texto.value*-1;
}
function calculos(numero){
    texto= document.getElementById("total");
    total=texto.value;
    estado=numero;
    flag=0;
}

function igual(){
    texto= document.getElementById("total");
    
    if(estado==1){
        texto.value= parseFloat(total) + parseFloat(texto.value);
        estado=6;
    }else if(estado==2){
        texto.value= parseFloat(total) - parseFloat(texto.value); 
        estado=6;
    }else if(estado==3){
        texto.value= parseFloat(total) * parseFloat(texto.value);
        estado=6; 
    }else if(estado==4){
        texto.value= parseFloat(total) / parseFloat(texto.value);
        estado=6; 
    }

}
