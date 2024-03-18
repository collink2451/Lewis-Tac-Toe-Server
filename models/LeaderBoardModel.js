const mongoose = require("mongoose");
const { Schema } = mongoose;

const LeaderBoardSchema = new Schema(
  {
    id: {
      type: String,
    },
    username: {
      type: String,
    },
    score: {
      type: Number,
    },
  },
  { versionKey: false }
);

LeaderBoardSchema.set("toObject", { virtuals: true });

const LeaderBoardModel = mongoose.model("leaderboards", LeaderBoardSchema);
module.exports = LeaderBoardModel;
