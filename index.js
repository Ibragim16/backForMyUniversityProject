const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = 4000;
app.use(cors());
app.use(express.json());
app.use(require("./routes"));

(async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://Ibragim:I44252525@cluster0.a6teb.mongodb.net/BackForMyUniversityProject?retryWrites=true&w=majority"
    );
    console.log("Сервер успешно запушен");
    app.listen(PORT, () => console.log(`http://localhost:${4000}`));
  } catch (err) {
    console.log(err.ToString());
  }
})();
