import express from "express";
import authorsRouter from "./api/authors/index.js";
import listEndpoints from "express-list-endpoints";
//after adding "type": "module" to package.json
const server = express(); //needs to parse the Body
const port = 3001; //it cannot be changed
//node ./src/server.js to run the server

server.use("/authors", authorsRouter); // "/authors" means that all the authorsRouter will have "/authors" before the path that is set on authorsRouter
server.listen(port, () => {
  console.log("Am I running?");
  console.table(listEndpoints(server));
});
