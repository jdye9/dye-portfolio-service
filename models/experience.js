const mongoose = require("mongoose");

const experienceSchema = new mongoose.Schema(
	{
		_id: {
			type: mongoose.Types.ObjectId,
			default: new mongoose.Types.ObjectId(),
			required: true,
		},
		experience: { type: String, required: true, unique: true },
		description: { type: [String], default: [], required: true },
		startDate: { type: Date, required: true },
		endDate: { type: Date, required: true },
		img: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "Image" },
	},
	{ collection: "Experiences" }
);

const Experience = mongoose.model("Experience", experienceSchema);
module.exports = { Experience };
