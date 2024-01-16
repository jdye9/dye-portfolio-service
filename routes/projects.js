const express = require("express");
const router = express.Router();
const { Project } = require("../models/project");
require("../models/image");
require("../models/video");

router.get("/", async (req, res) => {
	const projects = await Project.find({})
		.populate("media.dark")
		.populate("media.light")
		.exec();
	res.send(projects);
});

module.exports = router;
