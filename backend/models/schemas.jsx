const mongoose = require("mongoose");

//  user schema

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
      unique: true,
    },
    password: {
      type: String,
      require: true,
    },

    status: {
      type: String,
      enum: ["admin", "user"],
      default: "user",
    },
  },
  {
    timestamps: true,
  },
);

module.exports.username = mongoose.model("username", userSchema);

// recommendations schema

const recommendationsSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
      unique: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    review: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  },
);

module.exports.recommendations = mongoose.model(
  "recommendations",
  recommendationsSchema,
);

// for hire me form

const hireSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    website: {
      type: String,
      default: "https://example.com",
    },
    location: {
      type: String,
      required: true,
    },
    design: {
      type: [String],
      default: [],
    },
    newProject: {
      type: [String],
      default: [],
    },
    responsive: {
      type: [String],
      default: [],
    },
    time: {
      type: String,
      required: true,
    },
    budget: {
      type: String,
      required: true,
    },
    audience: {
      type: String,
      required: true,
    },
    objective: {
      type: String,
      required: true,
    },
    additional: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

module.exports.hire = mongoose.model("hires", hireSchema);
