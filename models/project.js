const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  projType: {
    type: String,
    required: true,
  },
  tech: {
    type: String,
    required: false,
  },
  content: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: false,
  },
});

module.exports = mongoose.model("Project", projectSchema);
