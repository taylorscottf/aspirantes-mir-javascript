let persona =  {
    nombre : "Pedro Perez",
    edad : 22,
    ciudad : "Lima",
    profeseión : "Doctor",
   
}
/*
const llaves = Object.keys(persona)
for(let i=0; i < llaves.length; i++){
  let llave = llaves[i]
  console.log(`${llave}: `, persona[llave])
}

function presentacion(persona) {
    return (persona.nombre) + ", " + (persona.edad) + ", " + (persona.ciudad);
}
//Llama a la función "presentacion" y almacena el resultado en una variable llamada "mensaje".
const mensaje = presentacion(persona);
console.log(mensaje);

persona.hobbies = ["Programar", "Karate", "Natación"];
console.log(persona.hobbies);*/
//Utiliza un ciclo for para imprimir en la consola cada uno de los elementos del arreglo de hobbies.
for (let i = 0; i < persona.hobbies.length; i++) {
    console.log(persona.hobbies[i]);
}