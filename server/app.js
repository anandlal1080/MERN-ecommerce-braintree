const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const expressValidator = require("express-validator");
require("dotenv").config();

const authRoutes = require("./routes/auth.js");
const userRoutes = require("./routes/user.js");
const catergoryRoutes = require("./routes/category.js");
const app = express();

// DB

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoAtlas Connected"));

// middlewares
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(expressValidator());

// routes middleware

app.use("/api", authRoutes);
app.use("/api", userRoutes);
app.use("/api", catergoryRoutes);

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
