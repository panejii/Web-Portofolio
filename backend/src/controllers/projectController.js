import Project from "../models/project.js";

export const getProjects = async (req, res) => {
  try {
    const projects = await Project.find();

    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const createProject = async (req, res) => {
  try {
    const project = await Project.create(req.body);

    res.status(201).json(project);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const updateProject = async (req, res) => {
  try {
    const project = await Project.findByIdAndUpdate(req.params.id, req.body, {
      returnDocument: 'after',
      runValidators: true,
    });

    if (!project) {
      return res.status(404).json({
        message: "Project tidak ditemukan",
      });
    }

    res.status(200).json(project);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const deleteProject = async (req, res) => {
  try {
    const project = await Project.findByIdAndDelete(req.params.id);

    if (!project) {
      return res.status(404).json({
        message: "Project tidak ditemukan",
      });
    }

    res.status(200).json({
      message: "Project berhasil dihapus",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};