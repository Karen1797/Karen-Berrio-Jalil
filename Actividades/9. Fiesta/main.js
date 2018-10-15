/*console.log("Hola soy Karen");
var nombre = "Karen";
var numero = "vaso";
var nombre2 = nombre;
var edades = [1,2]
var yo = {
    nombre: "Karen",
    apellido:"Berrio"
};
console.log(nombre2);
console.log(typeof(1))
console.log(typeof(edades));

function saludar(nombre) {
    return "Hola" + nombre;
}
var miFuncion =function saludar(nombre){

}
console.log(typeof(miFuncion));

document.querySelector(".estamosmelos").style.color='red';

var myEstamosMelos= document.querySelector("div").style.backgroundColor='blue';
*/

/*var loquepasa = function mostrarLaTecla(){
    console.log("hola bb");
}
document.addEventListener('keydown', loquepasa);
*/
function mostrarLaTecla(corazon){
    console.log(corazon.key, corazon.keyCode);
    var miAudiecito = document.querySelector('#t'+ corazon.keyCode);
    if (miAudiecito != null){
        miAudiecito.currentTime= 0;
        miAudiecito.play();
               
    }
    var teclas = document.querySelector('#teclita' + corazon.keyCode);
        teclas.classList.add('teclaPresionada');
    setTimeout( function(){
            teclas.classList.remove('teclaPresionada');
            teclas.classList.add('teclaLiberada');
    }, 1000);
}
document.addEventListener('keydown', mostrarLaTecla);
