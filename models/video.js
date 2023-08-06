const mongoose = require("mongoose");

const videoSchema = new mongoose.Schema(
	{
		_id: { type: mongoose.Schema.Types.ObjectId, required: true },
		fileName: { type: String, required: true, unique: true },
		url: { type: String, required: true, unique: true },
	},
	{ collection: "Videos" }
);
const Video = mongoose.model("Video", videoSchema);
module.exports = { Video };
