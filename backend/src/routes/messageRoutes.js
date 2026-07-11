import express from "express";
import {
  createMessage,
  getMessages,
  deleteMessage,
  markAsRead,
} from "../controllers/messageController.js";

const router = express.Router();

router.get("/", getMessages);
router.post("/", createMessage);
router.delete("/:id", deleteMessage);
router.patch("/:id/read", markAsRead);

export default router;