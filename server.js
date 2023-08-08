require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose.connect(process.env.DATABASE_URL, {
	useNewUrlParser: true,
	dbName: "Portfolio-Site",
});

const db = mongoose.connection;
db.on("error", (error) => console.log(error));
db.once("open", () => console.log("Connected to MongoDB"));

app.use(express.json());
app.use((req, res, next) => {
	res.setHeader(
		"Access-Control-Allow-Origin",
		"https://dye-portfolio.onrender.com"
	);
	res.setHeader(
		"Access-Control-Allow-Methods",
		"GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS,CONNECT,TRACE"
	);
	res.setHeader(
		"Access-Control-Allow-Headers",
		"Content-Type, Authorization, X-Content-Type-Options, Accept, X-Requested-With, Origin, Access-Control-Request-Method, Access-Control-Request-Headers"
	);
	res.setHeader("Access-Control-Allow-Credentials", true);
	res.setHeader("Access-Control-Allow-Private-Network", true);
	//  Firefox caps this at 24 hours (86400 seconds). Chromium (starting in v76) caps at 2 hours (7200 seconds). The default value is 5 seconds.
	res.setHeader("Access-Control-Max-Age", 7200);

	next();
});

const skillsRouter = require("./routes/skills");
app.use("/skills", skillsRouter);

const experiencesRouter = require("./routes/experiences");
app.use("/experiences", experiencesRouter);

const projectsRouter = require("./routes/projects");
app.use("/projects", projectsRouter);

app.listen(process.env.PORT || 3000, () => console.log("Server has started."));
