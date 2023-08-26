const { Schema, model } = require("mongoose");

const gameSchema = new Schema({
  title: String,
  genre: {
    type: Schema.ObjectId,
    ref: "genre",
  },
});

const game = model("game", gameSchema);

module.exports = game;