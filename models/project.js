const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
	{
		_id: {
			type: mongoose.Types.ObjectId,
			default: new mongoose.Types.ObjectId(),
			required: true,
		},
		title: { type: String, required: true },
		description: { type: String, required: true },
		media: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: "Video" || "Image",
		},
		url: { type: String, required: true, unique: true },
	},
	{ collection: "Projects" }
);
const Project = mongoose.model("Project", projectSchema);
module.exports = { Project };
