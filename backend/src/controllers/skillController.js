import Skill from "../models/skill.js";

export const getSkills = async (req, res) => {
  try {
    const skills = await Skill.find();

    res.json(skills);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};