const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const clientSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  Phone: { type: String, required: true, unique: true },
});

module.exports = mongoose.model("Client", clientSchema);
