import http from "http";

const server = http.createServer((req, res) => {
  res.end("Hello Node.js from hal_homepage!");
});

server.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
EOF
