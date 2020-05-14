const express = require("express");
const router = express.Router();
const Project = require("../models/project");

// All Projects Route
router.get("/", async (req, res) => {
  try {
    const projects = await Project.find({});
    res.render("projects/index", { projects: projects });
  } catch {
    res.redirect("/");
  }
});

// New Project Route
router.get("/new", (req, res) => {
  res.render("projects/new", { project: new Project() });
});

// Create Project Route
router.post("/", async (req, res) => {
  // res.send(req.body.name);
  const project = new Project({
    name: req.body.name,
  });
  try {
    const newProject = await project.save();
    //res.redirect(`projects/${newProject.id}`)
    res.redirect("projects");
  } catch {
    res.render("projects/new", {
      project: project,
      errorMessage: "Error creating project",
    });
  }
});

module.exports = router;
