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
app.use(cors());

const skillsRouter = require("./routes/skills");
app.use("/skills", skillsRouter);

app.listen(9000, () => console.log("Server has started."));
