const express = require("express");
const router = express.Router();
const { Skill } = require("../models/skill");
require("../models/image");

router.get("/", async (req, res) => {
	const skills = await Skill.find({}).populate("img").exec();
	res.send(skills);
});

module.exports = router;
