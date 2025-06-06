// Métodos básicos de salida
console.log("Hola mundo");
console.info("Console.info(): Similar a .log() pero para mostrar información");
console.warn("Console.warn(): Para advertencias");
console.error("Console.error(): Para errors");

// Tablas
const usuarios = [
  { nombre: "Juan", edad: 25, rol: "Desarrollador" },
  { nombre: "María", edad: 30, rol: "Diseñadora" },
  { nombre: "Carlos", edad: 28, rol: "Product Manager" },
];

console.log(usuarios);
console.table(usuarios);
console.table(usuarios, ["nombre", "rol"]);

// Tiempo
console.time("Operación");

for (let i = 0; i < 1000000; i++) {
  // Operación que consume tiempo
}

console.timeEnd("Operación");

// Count
console.count("Contador");
console.count("Contador");
console.count("Contador");
console.count("Contador");
console.count("Contador");
console.countReset("Contador");
console.count("Contador");

// Agrupación
console.group("Grupo principal");
console.log("Información 1");
console.group("Subgrupo de información 1");
console.log("Información subgrupo 1");
console.groupEnd();
console.group("Subgrupo de información 2");
console.log("Información subgrupo 2");
console.groupEnd();
console.log("Final");
console.groupEnd();

// Afirmaciones
console.assert(1 === 1, "Esto no se mostrará");
console.assert(1 === 2, "Esto se mostrará");

// Limpiar
console.clear();

console.trace("Mostrar la pila de llamadas actual")
