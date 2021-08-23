const router = require("express").Router();
const { Router } = require("express");
require("dotenv").config();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const {SECRET = "secret"} = process.env;

const User = require("../models/User");

// SEED DATA FOR SEED ROUTE
const placeUser = [
    {
        "username": "noamblanks",
        "password": "Noamrules!",
        "name": "Noam Blanks",
        "email": "noamblank@gmail.com"
    },
    {
        "username": "samwellmer",
        "password": "SamistheBest!!",
        "name": "Sam Wellmer",
        "email": "smwellmer@gmail.com"
    },
    {
        "username": "chrisabadilla",
        "password": "Chrisisalright..",
        "name": "Chris Abadilla",
        "email": "chabadilla92@gmail.com"
    }
];

// SIGN UP route to create a new user
router.post("/signup", async (req, res) => {
    try {
      // hash the password
      req.body.password = await bcrypt.hash(req.body.password, 10);
      // create a new user
      const user = await User.create(req.body);
      // send new user as response
      res.json(user);
    } catch (error) {
      res.status(400).json({ error });
    }
  });

// Login route to verify a user and get a token
router.post("/login", async (req, res) => {
    try {
      // check if the user exists
      const user = await User.findOne({ username: req.body.username });
      if (user) {
        //check if password matches
        const result = await bcrypt.compare(req.body.password, user.password);
        if (result) {
          // sign token and send it in response
          const token = await jwt.sign({ username: user.username }, SECRET);
          res.json({ token });
        } else {
          res.status(400).json({ error: "password doesn't match" });
        }
      } else {
        res.status(400).json({ error: "User doesn't exist" });
      }
    } catch (error) {
      res.status(400).json({ error });
    }
  });


// // SEED ROUTE
// router.get("/seed", async (req, res) => {
//   try {
//     await User.remove({});
//     await User.create(placeUser);
//     const users = await User.find({});
//     res.json(users);
//   } catch (error) {
//     res.status(400).json(error);
//   }
// });

// // INDEX Route
// router.get("/", async (Req, res) => {
//     try {
//       const places = await User.find({});
//       res.json(places);
//     } catch (error) {
//       res.status(400).json(error);
//     }
//   });

//   // CREATE Route
// router.post("/", async (req, res) => {
//     try {
//       const newUser = await User.create(req.body);
//       res.json(newUser);
//     } catch (error) {
//       res.status(400).json(error);
//     }
//   });

//   // UPDATE Route
// router.put("/:id", async (req, res) => {
//     try {
//       const updatedUser = await User.findByIdAndUpdate(
//         req.params.id,
//         req.body,
//         { new: true }
//       );
//       res.json(updatedUser);
//     } catch (error) {
//       res.status(400).json(error);
//     }
//   });

//   // DELETE Route
// router.delete("/:id", async (req, res) => {
//     try {
//       const deletedUser = await User.findByIdAndRemove(req.params.id);
//       res.json(deletedUser);
//     } catch (error) {
//       res.status(400).json(error);
//     }
//   });

// export the router which has all our routes registered to it
module.exports = router;