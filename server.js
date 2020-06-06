const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

const movieRouter = require("./routes/movie");

app.use("/api/movie", movieRouter);

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
