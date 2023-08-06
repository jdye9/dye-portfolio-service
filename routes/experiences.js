const express = require("express");
const router = express.Router();
const { Experience } = require("../models/experience");
require("../models/image");

router.get("/", async (req, res) => {
	const experiences = await Experience.find({}).populate("img").exec();
	res.send(experiences);
});

module.exports = router;
