const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const employees = require("./routes/api/employees");

const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// DB config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose
  .connect(
    db,
    {
      auth: { authSource: "admin" },
      useNewUrlParser: true
    }
  )
  .then(() => console.log("Mongodb connected"))
  .catch(error => console.log(error));

// Use routes
app.use("/api/employees", employees);

app.get("/", (req, res) => res.send("Hello world"));

// Server static assets if in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
