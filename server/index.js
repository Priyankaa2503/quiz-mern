const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const quizRoutes = require("./routes/quiz")
const questionRoutes = require("./routes/questions")

const path = require('path')
const app =express();
dotenv.config();
connectDB();
app.use(express.json());

// app.use(express.urlencoded({extended:false}));
const PORT =process.env.PORT || 3002;
app.listen(PORT, console.log(`server started on port ${PORT}`));
app.use("/api/quiz",quizRoutes);
app.use("/api/question",questionRoutes);
