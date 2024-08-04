// server.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const port = 5000;

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose
  .connect("mongodb://localhost:27017/myFirstMongoDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

// load  todo Model 
const Todo = require("./models/Todo");
// Define Routes
app.post("/api/todos", async (req, res) => {
  const {text} = req.body;
  const newTodo = new Todo({text, });
  try {
    const todo = await newTodo.save();
    res.status(201).json(todo);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.get("/api/todos", async (req, res) => {
  try {
    const todos = await Todo.find();
    res.status(200).json(todos);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Define a simple route
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Start the server 
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

