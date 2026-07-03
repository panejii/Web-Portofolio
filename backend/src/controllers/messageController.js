import Message from "../models/Message.js";

export const createMessage = async (req, res) => {
  try {
    const newMessage = await Message.create(req.body);

    res.status(201).json(newMessage);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const getMessages = async (req, res) => {
  try {
    const messages = await Message.find().sort({
      createdAt: -1,
    });

    res.json(messages);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const deleteMessage = async (req, res) => {
  try {
    await Message.findByIdAndDelete(req.params.id);

    res.json({
      message: "Pesan berhasil dihapus",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};