import mongoose from "mongoose";
import dotenv from "dotenv";

import Skill from "../src/models/skill.js";
import { skills } from "./skills.js";

dotenv.config();

async function seed() {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log(
      "Database:",
      mongoose.connection.db.databaseName
    );

    await Skill.deleteMany();
    await Skill.insertMany(skills);

    console.log("Skills seeded successfully!");

    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

seed();