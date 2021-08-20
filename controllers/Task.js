const router = require("express").Router();
const { Router } = require("express");

const Task = require("../models/Task");

// SEED DATA FOR SEED ROUTE
const placeTask = [
    {
        username: "naomblanks",
        name: "Clean Kitchen",
        frequency: 2,
        countdown: 800,
        tags: "Kitchen",
        checklist: "Do dishes"
    },
    {
        username: "samwellmer",
        name: "Clean Bathroom",
        frequency: 2,
        countdown: 123151231232125512,
        tags: "Bathroom",
        checklist: "Scrub toilet"
    },
  {
        username: "chrisabadilla",
        name: "Grooming",
        frequency: 2,
        countdown: 43123123123,
        tags: "Self Care",
        checklist: "Get haircut"
    }
];

// SEED ROUTE
router.get("/seed", async (req, res) => {
  try {
    await Task.remove({});
    await Task.create(placeTask);
    const tasks = await Task.find({});
    res.json(tasks);
  } catch (error) {
    res.status(400).json(error);
  }
});

// export the router which has all our routes registered to it
module.exports = router;