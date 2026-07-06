import dotenv from "dotenv";
import bcrypt from "bcrypt";

import { connectDB } from "../src/config/db.js";
import User from "../src/models/user.js";

dotenv.config();

const createAdmin = async () => {
  try {
    // Connect Database
    await connectDB();

    // Ambil credential dari .env
    const email = process.env.ADMIN_EMAIL;
    const password = process.env.ADMIN_PASSWORD;

    // Cek apakah admin sudah ada
    const existingAdmin = await User.findOne({ email });

    if (existingAdmin) {
      console.log("Admin sudah tersedia.");
      process.exit(0);
    }

    // Hash Password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Simpan ke database
    await User.create({
      email,
      password: hashedPassword,
    });

    console.log("Admin berhasil dibuat.");
    process.exit(0);

  } catch (error) {
    console.error("Seeder gagal:", error.message);
    process.exit(1);
  }
};

createAdmin();