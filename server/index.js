const http = require("http");
const app = require("./app");
const { port } = require("./config/Keys");

const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
