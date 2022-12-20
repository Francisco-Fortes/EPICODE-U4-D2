import express from "express";
import fs from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
// Backend routes

//1 POST /authors => create a new author
//       Authors should contain the following information:
//                name
//                surname
//                ID (Unique and server-generated)
//                email
//                date of birth
//                avatar (e.g. https://ui-avatars.com/api/?name=John+Doe)

//2 GET /authors => returns the list of authors
//3 GET /authors/:authorId => returns a single author
//4 PUT /authors/:authorId  => edit the author with the given id
//5 DELETE /authors/:authorId  => delete the author with the given id

const authorsRouter = express.Router();

console.log("Current file URL", import.meta.url); //Current URL
console.log("Current file path", fileURLToPath(import.meta.url)); //Current URL transforms to a Path (according to the OS of the user)
console.log("Parent folder path", dirname(fileURLToPath(import.meta.url))); //
//join is going to concatenate according to the OS of the user
console.log(
  "Target path",
  join(dirname(fileURLToPath(import.meta.url)), "authors.json")
);
const usersJSONPath = join(
  dirname(fileURLToPath(import.meta.url)),
  "authors.json"
);
//1 POST /authors => create a new author
authorsRouter.post("/", (request, response) => {
  // console.log("POST route here");
  response.send({ message: "POST route here" });
});
//2 GET /authors => returns the list of authors
authorsRouter.get("/", (request, response) => {
  const fileContent = fs.readFileSync(usersJSONPath);
  console.log(fileContent);
});
//3 GET /authors/:authorId => returns a single author
authorsRouter.get("/:authorsId", (request, response) => {});
//4 PUT /authors/:authorId  => edit the author with the given id
authorsRouter.put("/:authorsId", (request, response) => {});
//5 DELETE /authors/:authorId  => delete the author with the given id
authorsRouter.delete("/:authorsId", (request, response) => {});

export default authorsRouter;
