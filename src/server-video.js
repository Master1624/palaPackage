const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  if (req.url === "/video") {
    const videoPath = path.join(__dirname, "../public/video.mp4");
    const stat = fs.statSync(videoPath);

    res.writeHead(200, {
      "content-type": "video/mp4",
      "content-length": stat.size,
    });

    const readStream = fs.createReadStream(videoPath);
    let chunkCounter = 0;

    readStream.on("data", (chunk) => {
      chunkCounter++;
      console.log(
        `Chunk ${chunkCounter}: size: ${chunk.length} bytes, leídos y enviados`
      );
    });

    readStream.pipe(res);
  } else {
    res.writeHead(404, { "content-type": "text/plain" });
    res.end("Not Found");
  }
});

server.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
