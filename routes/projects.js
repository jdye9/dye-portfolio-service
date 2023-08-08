const express = require("express");
const router = express.Router();
const { Project } = require("../models/project");
require("../models/image");
require("../models/video");

app.use(
	cors({
		origin: "https://dye-portfolio.onrender.com",
		credentials: true,
	})
);

router.get("/", async (req, res) => {
	const projects = await Project.find({}).populate("media").exec();
	res.send(projects);
});

module.exports = router;
