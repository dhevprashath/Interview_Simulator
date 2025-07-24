const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, 'user name is required'],
    },
    password: {
      type: String,
      required: [true, 'password is required'],
    },
    questions: {
        type: Array,
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
