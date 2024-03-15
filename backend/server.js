const express = require("express");
const dotenv = require("dotenv");
const { chats } = require("./data/data");
const colors = require("colors");
const userRoutes = require("./routes/userRoutes");
const connectDB = require("./config/db");

dotenv.config();
connectDB();
const app = express();

app.use(express.json()); // bhai please except the json data

// express api
app.get("/", (request, response) => {
  response.send("API is running successfully ");
});

// app.use("/api/user");

// chat object show
// app.get("/api/chat", (request, response) => {
//   response.send(chats);
// });

app.get("/api/chat/:id", (request, response) => {
  console.log(request.params.id);
  // find a single chat
  const singleChat = chats.find((c) => c._id === request.params.id);
  response.send(singleChat);
});

// env port
const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server started on port ${PORT}`.yellow.bold));
