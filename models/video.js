const mongoose = require("mongoose");

const videoSchema = new mongoose.Schema(
	{
		fileName: { type: String, required: true, unique: true },
		url: { type: String, required: true, unique: true },
	},
	{ collection: "Videos" }
);
const Video = mongoose.model("Video", videoSchema);
module.exports = { Video };
