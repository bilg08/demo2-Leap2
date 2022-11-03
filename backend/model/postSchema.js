const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  //   owner: {
  //     type: mongoose.Schema.ObjectId,
  //     ref: "User",
  //     required: [true, "Нэрийг оруулна уу"],
  //     maxLength: [50, "НЭРНЫ УРТ ИХ БАЙНА"],
  //   },
  isNew: {
    type: Boolean,
    required: [true],
    default: true,
  },
  advertisingHeader: {
    type: String,
    required: [true, "Зарын гарчгийг оруулна уу"],
    maxLength: [50, "НЭРНЫ УРТ ИХ БАЙНА"],
  },
  photo: {
    type: String,
    default: "no-photo.jpeg",
  },
  price: {
    type: Number,
    required: [true, "Үнийг оруулна уу"],
    default: "Үнэ тохирно",
  },
  detail: {
    type: String,
    required: [true, "Дэлгэрэнгүй хэсгийг оруулна уу"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("post", PostSchema);
