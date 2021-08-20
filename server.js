require("dotenv").config();

const PORT = process.env.PORT;

// IMPORT DEPENDENCIES
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

// IMPORT DATABASE CONNECTION
const mongoose = require("./db/connection");

// IMPORT ROUTERS
const tasksRouter = require("./controllers/Task")
const usersRouter = require("./controllers/User")

// CREATE EXPRESS APPLICATION OBJECT
const app = express();

// MIDDLEWARE
app.use(cors()); 
app.use(express.json()); 
app.use(morgan("tiny")); 

// ROUTES AND ROUTES
app.get("/", (req, res) => res.send("Server is Working")); // <--- Route to test server
app.use("/tasks", tasksRouter);
app.use("/users", usersRouter);

// LISTENER
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));