const fs = require("fs");

const readableStream = fs.createReadStream("public/book.txt", {
  encoding: "utf8",
});

const writableStream = fs.createWriteStream("public/outputBook.txt");

readableStream.on("data", (chunk) => {
  console.log("Chunk:", chunk);
  writableStream.write(chunk);
});

readableStream.on("end", () => {
  console.log("Terminó la lectura del archivo");
  writableStream.end();
});

readableStream.on("error", (error) => {
  console.log("Error de lectura del archivo:", error);
});

writableStream.on("error", (error) => {
  console.log("Error en escritura del archivo:", error);
});
