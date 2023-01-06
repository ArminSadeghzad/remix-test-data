import mongoose from "mongoose";


const Todoschema = new mongoose.Schema(
  {
    title: { required: true },
  },
  {
    collection: "todos",
  }
);

const model = mongoose.models.User || mongoose.model("Todo", Todoschema);
export default model;