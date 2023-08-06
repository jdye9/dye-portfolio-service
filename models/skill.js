const mongoose = require("mongoose");

const skillSchema = new mongoose.Schema(
	{
		_id: { type: mongoose.Schema.Types.ObjectId, required: true },
		skill: { type: String, required: true, unique: true },
		skill_type: { type: String, required: true },
		img: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "Image" },
	},
	{ collection: "Skills" }
);

const Skill = mongoose.model("Skill", skillSchema);
module.exports = { Skill };
