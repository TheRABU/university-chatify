const express = require("express");
const { chats } = require("./data/data");
const app = express();
// express api
app.get("/", (request, response) => {
  response.send("API is running successfully ");
});
app.get("/api/chat", (request, response) => {
  response.send(chats);
});
app.listen(5000, console.log("Server started on port 5000"));
