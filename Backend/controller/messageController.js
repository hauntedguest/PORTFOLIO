import { Message } from "../models/messageSchema.js";
import { catchAsyncErrors } from "../middlewares/catchAsyncErrors.js";
import ErrorHandler from "../middlewares/error.js";

export const sendMessage = catchAsyncErrors(async (req, res, next) => {
    const { senderName, subject, message } = req.body;
    if (!senderName || !subject || !message) {
      return next(new ErrorHandler("Please Fill Full Form!", 400));
    }
    const data = await Message.create({ senderName, subject, message });
    res.status(201).json({
      success: true,
      message: "Message Sent",
      data,
    });
  });
  