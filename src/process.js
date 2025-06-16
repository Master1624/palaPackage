console.log("ID del proceso:", process.pid);
console.log("Directorio actual:", process.cwd());
console.log("Versión de Node.js:", process.version);
console.log("Versión de Node.js:", process.platform);
console.log("Versión de Node.js:", process.arch);
console.log("Versión de Node.js:", process.uptime(), "segundos");

console.log(process.env);
console.log("Path:", process.env.PATH);
console.log("User profile:", process.env.USERPROFILE || process.env.HOME);
console.log("NODE_ENV:", process.env.NODE_ENV || "No definido");

const memoryUsage = process.memoryUsage();
console.log("Memory:", memoryUsage);
Object.entries(memoryUsage).forEach(([key, value]) => {
  console.log({
    [key]: (value / (1024 * 1024)).toFixed(2) + " MB",
  });
});

process.on('exit', (code) => {
  console.log("El proceso está terminado", code);
});

process.on('SIGINT', () => {
  console.log("Se recibió la señal de interrupción");
  process.exit(0);
});

console.log("Escribe algo y presiona Enter o Control+C para salir");

process.stdin.on('data', (data) => {
  const input = data.toString().trim();
  
  if (input.toLowerCase() === 'salir') {
    console.log("Comando de salida recibido");
    process.exit();
  } else {
    console.log("Escribiste:", input);
    console.log("Escribe 'salir' para terminar o escribe algo más");
  }
});