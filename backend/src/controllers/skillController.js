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

export const createSkill = async (req, res) => {
  try {
    const skill = await Skill.create(req.body);

    res.status(201).json(skill);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const updateSkill = async (req, res) => {
  try {
    const skill = await Skill.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!skill) {
      return res.status(404).json({
        message: "Skill tidak ditemukan",
      });
    }

    res.status(200).json(skill);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const deleteSkill = async (req, res) => {
  try {
    const skill = await Skill.findByIdAndDelete(req.params.id);

    if (!skill) {
      return res.status(404).json({
        message: "Skill tidak ditemukan",
      });
    }

    res.status(200).json({
      message: "Skill berhasil dihapus",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};