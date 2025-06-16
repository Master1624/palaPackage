console.log("Hora actual:", new Date().toLocaleTimeString());

const timeout = setTimeout(() => {
  console.log("Este mensaje aparece después de dos segundos");
}, 2000);

setImmediate(() => {
  console.log("Este mensaje aparece en la próxima iteración del bucle");
});

const intervalId = setInterval(() => {
  console.log("Este mensaje aparece cada 3 segundos");
}, 3000);

setTimeout(() => {
  console.log("Cancelar el intervalo después de 10 segundos");
  clearInterval(intervalId);
}, 10000);

const timeoutId = setTimeout(() => {
  console.log("Este mensaje nunca aparecerá");
}, 10000);

clearTimeout(timeoutId);

console.log("Hora final:", new Date().toLocaleTimeString());
