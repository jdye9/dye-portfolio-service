const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
	{
		title: { type: String, required: true },
		description: { type: String, required: true },
		media: {
			light: {
				type: mongoose.Schema.Types.ObjectId,
				required: true,
				ref: "Video" || "Image",
			},
			dark: {
				type: mongoose.Schema.Types.ObjectId,
				required: true,
				ref: "Video" || "Image",
			},
		},
		url: { type: String, required: true, unique: true },
	},
	{ collection: "Projects" }
);
const Project = mongoose.model("Project", projectSchema);
module.exports = { Project };
