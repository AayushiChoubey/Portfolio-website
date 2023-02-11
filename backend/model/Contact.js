import mongoose from "mongoose";


const contactSchema = new mongoose.Schema({
    name: "String",
    email: {
        type: String,
        required: [true, "Please Enter Email"],
      },
    message: "String",
});

export const Contact= mongoose.model("Contact", contactSchema);