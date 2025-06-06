const os = require("os");

function showSystemInfo() {
  console.log("Sistema operativo:", os.type());
  console.log("Plataforma:", os.platform());
  console.log("Arquitectura:", os.arch());
  console.log("Versión OS:", os.version());
  const uptime = os.uptime();
  console.log(`System uptime: ${uptime} segundos`);
  const totalMemory = os.totalmem();
  console.log(`Total memory: ${totalMemory / 1024 / 1024} MB`);
  const freeMemory = os.freemem();
  console.log(`Free memory: ${freeMemory / 1024 / 1024} MB`);
  console.log("CPU Info:");
  const cpus = os.cpus();
  cpus.forEach((cpu, index) => {
    console.log(`Core ${index + 1}: ${cpu.model} @ ${cpu.speed / 1000} GHz`);
  });
  console.log("Home directory:", os.homedir());
  console.log("Hostname:", os.hostname());
}

showSystemInfo();
