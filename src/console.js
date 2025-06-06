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
