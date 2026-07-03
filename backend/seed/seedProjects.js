import mongoose from "mongoose";
import dotenv from "dotenv";
import Project from "../src/models/project.js";
import { projects } from "./project.js";

dotenv.config();

async function seed() {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    // Letakkan di sini!
    console.log("Database:", mongoose.connection.db.databaseName);

    await Project.deleteMany();
    await Project.insertMany(projects);

    console.log("Projects seeded successfully!");

    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

seed();