// document.write usarlo para log por pantalla
// document.write('<h1>Hola mundo</h1>');

// Textp por consola del navegador para debug 
// console.log('mensaje')

// getElementById localiza una clave asociada a un tag
// innerHTML sustutuye el contenido por el asignado
//   aplica a etiquetas de texto, a calculos, no a imagenes
//document.getElementById("id1").innerHTML = 'Parrafo cambiado';

// F() CON NOMBRE, ASIGNACION A VARIABLE
//function f1() {
//    console.log('f1');
//}

//var fr = f1;
//console.log(fr); // Codigo


// F() ANONIMA
//vf2= function () {
//    console.log('f2');
//}

//console.log(vf2()); // Ejecuta


// F( )ANONIMA - CREAR UNA FUNCION A TRAVEZ DE UN CONTRUCTOR
//var mif = new Function("a","b","return a + b");
//console.log(mif(2,3));


//  F() ANONIMA - FUNCION AUTOINVOCADA - se ejecuta al miemo tiempo que se define
//(function() {
//    alert('Alerta');
//}());


// A continuacion se define un objeto, con pares clave / valor
// Objetos pueden contener datos primitivos, arreglos, otros objetos o funciones
//var ob1 = { nombre: "Marcelo", apellido: "spano"};
//for (var a in ob1) {
//    alert(ob1[a]); // Expone Marcelo y luego Spano
//}


// Creacion de un objeto a partir de new Object
var persona = new Object();
persona.nombre = "Marcelo";
persona.edad = 100;
alert(persona.nombre);
alert(persona.edad);
if (z>9) {
    if (x<2) {
        
    }
}


// Definir el constructor y crear objetos a partir del mismo
// function Persona (nombre, edad) {
//    this.nombre = nombre;
//    this.edad = edad;
//}

//var p1 = new Persona("Marcelo", 100);
//alert(p1.nombre);
//alert(p1.edad);



// OBjetos nativos no dependen del navegador: String, Cadena, Number, Boolean, Data, Math, RegExp, Array, Function . Object
// NO es recomendable utilizar objetos de los tipos ptimitivos ( new String, Cadena, Number) ya que seria mejor usar la version primitiva de los mismos
//    idem con new Array, se usa directamente con []
//    idem new ExpReg, se usa /exoresion regular/
//    idem new Function, se usa function()
//  Date no tiene una expresion equivalente, requiere new Date()
//  Math es un objeto global, no se define con new
//  Object puede manejarse con = {}


// Objetos de alto nivel, corresponden del modelo del navegador: window, screen, navigator, location, history, 
// Objeto de alto nivel, coreesponde con el modelo del documento (DOM): document

