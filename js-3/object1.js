
let pedro =  {
    nombre : "Pedro Perez",
    edad : 30,
    activo : true,
    hobbies : ['programar', 'squash', 'piano'],
    //funnción llamada saludar forma 
    saludar: function() {
        console.log("Hola, me llamo " + this.nombre);
    }
}

 
  /*
  //Imprime en consola el valor de la llave edad.
  console.log(pedro.edad)
  
  //Agrega una propiedad con llave estatura y valor 1.8.
  pedro.estatura = 1.8
  
  //Elimina la propiedad con llave activo.
  delete pedro.activo
  */
  
  
  //Recorre todas las propiedades e imprímelas en consola sin necesidad de declarar cada uno
  /*const llaves = Object.keys(pedro)
  for(let i=0; i < llaves.length; i++){
    let llave = llaves[i]
    console.log(`${llave}: `, pedro[llave])
  }
*/
 
//Recorre todas las propiedades e imprímelas en consola Forma 3
console.log("Nombre: " + pedro.nombre);
console.log("Edad: " + pedro.edad);
console.log("Activo: " + pedro.activo);
console.log("Hobbies: " + pedro.hobbies);
 //funnción llamada saludar forma 2
function saludar(array) {
    let nombre= array.nombre
    return `Hola me llamo ${nombre}`
    }
  
//funnción llamada saludar forma 1 
pedro.saludar()

//funnción llamada saludar forma 2
console.log(saludar(pedro))



 //Recorre todas las propiedades e imprímelas en consola Forma 2 siempre y cuando sea entre llaves y corchetes
 /*
  for (let i = 0; i < pedro.length; i++) {
    
    console.log("=================");
    console.log("Nombre:" + pedro.nombre);
    console.log("edad:" + pedro[i].edad);
    console.log("activo:" + pedro[i].activo);
    console.log("hobbies:" + pedro[i].hobbies);
};*/