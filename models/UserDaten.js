const { Schema, model, Types } = require("mongoose");

const schema = new Schema({
    owner:{type: Types.ObjectId, ref: "User"},
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  admin: { type: Boolean, required: true },
});

module.exports = model("UserDaten", schema);
