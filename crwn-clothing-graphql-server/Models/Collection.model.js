const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const collectionSchema = new Schema(
   {
      title: { type: String, required: true },
      routeName: { type: String, required: true },
      linkUrl: { type: String, required: true },
      imageUrl: { type: String, required: true },
      size: { type: Boolean, default: false },
   },
   { timestamps: true }
);

module.exports = mongoose.model("Collection", collectionSchema);
