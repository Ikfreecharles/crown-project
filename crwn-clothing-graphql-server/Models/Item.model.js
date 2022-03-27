const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemSchema = new Schema(
   {
      name: { type: String },
      price: { type: Number },
      imageUrl: { type: String },
      collectionId: { type: String },
   },
   { timestamps: true }
);

module.exports = mongoose.model("Item", itemSchema);
