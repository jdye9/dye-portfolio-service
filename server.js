require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

app.use(express.json());

app.use(
	cors({
		origin: "https://dye-portfolio.vercel.app",
		credentials: true,
	})
);

const connectDB = async () => {
	try {
		const conn = await mongoose.connect(process.env.DATABASE_URL, {
			useNewUrlParser: true,
			dbName: "Portfolio-Site",
		});
		console.log(`MongoDB Connected`, conn.connection.host);
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
	app.listen(process.env.PORT, () => {
		console.log("listening for requests");
	});
});
