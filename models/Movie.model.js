const { mongoose, Schema, model } = require('mongoose');

const movieSchema = new Schema(
  {
    title: String,
    genre: String,
    plot: String,
    cast: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Celebrities"
  }],
  },
  {
    timestamps: true
  }
);

module.exports = model('Movies', movieSchema);