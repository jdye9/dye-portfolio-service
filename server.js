require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

mongoose.connect(process.env.DATABASE_URL, {
	useNewUrlParser: true,
	dbName: "Portfolio-Site",
});

const db = mongoose.connection;
db.on("error", (error) => console.log(error));
db.once("open", () => console.log("Connected to MongoDB"));

app.use(express.json());

const skillsRouter = require("./routes/skills");
app.use(
	"/skills",
	skillsRouter,
	cors({
		origin: "https://dye-portfolio.onrender.com",
		credentials: true,
	})
);

const experiencesRouter = require("./routes/experiences");
app.use(
	"/experiences",
	experiencesRouter,
	cors({
		origin: "https://dye-portfolio.onrender.com",
		credentials: true,
	})
);

const projectsRouter = require("./routes/projects");
app.use(
	"/projects",
	projectsRouter,
	cors({
		origin: "https://dye-portfolio.onrender.com",
		credentials: true,
	})
);

app.listen(process.env.PORT || 3000, () => console.log("Server has started."));
