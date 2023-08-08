const express = require("express");
const router = express.Router();
const { Experience } = require("../models/experience");
const app = express();
require("../models/image");

app.use(
	cors({
		origin: "https://dye-portfolio.onrender.com",
		credentials: true,
	})
);

router.get("/", async (req, res) => {
	const experiences = await Experience.find({}).populate("img").exec();
	res.send(experiences);
});

module.exports = router;
