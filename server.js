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

app.use(
	cors({
		origin: "https://dye-portfolio.onrender.com",
		credentials: true,
	})
);

const connectDB = async () => {
	try {
		const conn = await mongoose.connect(process.env.DATABASE_URL);
		console.log(`MongoDB Connected: ${conn.connection.host}`);
	} catch (error) {
		console.log(error);
		process.exit(1);
	}
};

const experiencesRouter = require("./routes/experiences");
app.use("/experiences", experiencesRouter);

const skillsRouter = require("./routes/skills");
app.use("/skills", skillsRouter);

const projectsRouter = require("./routes/projects");
app.use("/projects", projectsRouter);

connectDB().then(() => {
	app.listen(PORT || 3000, () => {
		console.log("listening for requests");
	});
});
