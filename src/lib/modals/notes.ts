import { Schema, model, models } from "mongoose";

const NotesSchema = new Schema(
  {
    username: { type: String, required: true, unique: true }, 
    Title: { type: String, required: true}, 
    Content: { type: String, required: true},
  },
  {
    timestamps: true, 
  }
);

const Note = models.User || model("Notes", NotesSchema);

export default Note;