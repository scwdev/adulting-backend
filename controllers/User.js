const router = require("express").Router();
const { Router } = require("express");

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

// SEED ROUTE
router.get("/seed", async (req, res) => {
  try {
    await User.remove({});
    await User.create(placeUser);
    const users = await User.find({});
    res.json(users);
  } catch (error) {
    res.status(400).json(error);
  }
});

// export the router which has all our routes registered to it
module.exports = router;