const mongoose = require("mongoose");

const MessageSchema = mongoose.Schema(
  {
    messages: {
      text: { type: String, required: true },
    },

    users: Array,
    sender: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Message = mongoose.model("Message", MessageSchema);

module.exports = Message;
