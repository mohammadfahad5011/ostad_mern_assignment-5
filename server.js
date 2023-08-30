const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  // Log a message when the server starts listening
  console.log("Server listening on port 3000");

  // Set response headers
  res.setHeader("Content-Type", "text/plain");

  // Handle different routes
  if (req.url === "/") {
    res.end("This is Home Page");
  } else if (req.url === "/about") {
    res.end("This is About Page");
  } else if (req.url === "/contact") {
    res.end("This is Contact Page");
  } else if (req.url === "/file-write") {
    // Use fs.writeFile() to create a file and write the text
    fs.writeFile("demo.txt", "hello world", (err) => {
      if (err) {
        console.error("Error writing to file:", err);
        res.end("Error writing to file");
      } else {
        console.log('File "demo.txt" written successfully');
        res.end('File "demo.txt" created and text written');
      }
    });
  } else {
    // Handle unknown routes
    res.statusCode = 404;
    res.end("404 Not Found");
  }
});

// Start the server and listen on port 3000
server.listen(3000, () => {
  console.log("Server listening on port 3000 ... ");
});
