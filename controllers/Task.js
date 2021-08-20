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

// INDEX Route
router.get("/", async (Req, res) => {
    try {
      const places = await Task.find({});
      res.json(places);
    } catch (error) {
      res.status(400).json(error);
    }
  });

  // CREATE Route
router.post("/", async (req, res) => {
    try {
      const newTask = await Task.create(req.body);
      res.json(newTask);
    } catch (error) {
      res.status(400).json(error);
    }
  });

  // UPDATE Route
router.put("/:id", async (req, res) => {
    try {
      const updatedTask = await Task.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      res.json(updatedTask);
    } catch (error) {
      res.status(400).json(error);
    }
  });

  // DELETE Route
router.delete("/:id", async (req, res) => {
    try {
      const deletedTask = await Task.findByIdAndRemove(req.params.id);
      res.json(deletedTask);
    } catch (error) {
      res.status(400).json(error);
    }
  });

// export the router which has all our routes registered to it
module.exports = router;