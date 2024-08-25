const express = require("express");
const path = require("path");
const fs = require("fs");
const cors = require("cors"); // Import cors

const app = express();
const PORT = 3000;

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));

app.post("/submit-survey", (req, res) => {
  const formData = req.body;
  const filePath = path.join(__dirname, "data", "surveyData.json");

  fs.readFile(filePath, "utf8", (err, data) => {
    let jsonData = [];

    if (!err && data) {
      jsonData = JSON.parse(data);
    }

    jsonData.push(formData);

    fs.writeFile(filePath, JSON.stringify(jsonData, null, 2), (err) => {
      if (err) {
        console.error("Error saving data:", err);
        res.status(500).send("Server error");
      } else {
        res.send("Survey data saved successfully");
      }
    });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
