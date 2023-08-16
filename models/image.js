const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema(
	{
		_id: {
			type: mongoose.Types.ObjectId,
			default: new mongoose.Types.ObjectId(),
			required: true,
		},
		fileName: { type: String, required: true, unique: true },
		url: { type: String, required: true, unique: true },
	},
	{ collection: "Images" }
);
const Image = mongoose.model("Image", imageSchema);
module.exports = { Image };
