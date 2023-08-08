const express = require("express");
const router = express.Router();
const { Skill } = require("../models/skill");
const app = express();
require("../models/image");

app.use(
	cors({
		origin: "https://dye-portfolio.onrender.com",
		credentials: true,
	})
);

router.get("/", async (req, res) => {
	const skills = await Skill.find({}).populate("img").exec();
	res.send(skills);
});

module.exports = router;
