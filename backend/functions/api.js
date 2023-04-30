const express = require("express");
const connection = require("./database.js");
const mongoose = require("mongoose");
const model = require("./Model.js");
const bodyParser = require("body-parser");
const serverless = require("serverless-http");
const cors = require("cors");
const app = express();
const port = 5000;
const router = express.Router();

// Modules
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "*",
  })
);

// DB Connection
mongoose.set("strictQuery", true);
connection();

// Routes
router.get("/", async (req, res) => {
  res.status(200).json({
    message: "Working...",
  });
});
router.post("/register", async (req, res) => {
  const {
    fname,
    lname,
    father,
    mobile,
    email,
    country,
    state,
    city,
    gender,
    age,
  } = req.body;

  try {
    await model
      .create({
        fname: fname,
        lname: lname,
        father: father,
        mobile: mobile,
        email: email,
        country: country,
        state: state,
        city: city,
        gender: gender,
        age: age,
      })
      .then((docs) => {
        if (docs) {
          console.log(docs);
          res
            .json({
              message: "Added",
            })
            .status(200);
        } else {
          console.log("Not added");
          res
            .json({
              message: "Not Added",
            })
            .status(500);
        }
      });
  } catch (error) {
    console.log("Error: " + error);
    res
      .json({
        message: "Not Added",
      })
      .status(500);
  }
});

// Listening
// app.listen(port, () => console.log(`Example app listening on port ${port}!`));

app.use("/", router);
module.exports.handler = serverless(app);
