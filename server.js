require("dotenv").config();

const PORT = process.env.PORT;

// IMPORT DEPENDENCIES
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

// IMPORT DATABASE CONNECTION
const mongoose = require("./db/connection");

// CREATE EXPRESS APPLICATION OBJECT
const app = express();

// MIDDLEWARE
app.use(cors()); 
app.use(express.json()); 
app.use(morgan("tiny")); 

// ROUTES AND ROUTES
app.get("/", (req, res) => res.send("Server is Working")); // <--- Route to test server

// LISTENER
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));