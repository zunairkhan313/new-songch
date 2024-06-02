import mongoose, { Schema, models } from "mongoose";

const productSchema = new Schema(
  {
    title: { type: String },
    description: { type: String },
    image: { type: String },
  },
  {
    timestamps: true,
  }
);

const Product = models.Product || mongoose.model("Product", productSchema);

export default Product;
