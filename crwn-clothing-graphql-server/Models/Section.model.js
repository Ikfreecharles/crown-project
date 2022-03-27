const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const sectionSchema = new Schema(
   {
      title: { type: String, required: true },
      imageUrl: { type: String, required: true },
      linkUrl: { type: String, required: true },
      size: { type: Boolean, default: false },
   },
   { timestamps: true }
);

module.exports = mongoose.model("section", sectionSchema);
