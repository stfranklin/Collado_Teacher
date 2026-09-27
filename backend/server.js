const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/api/message", (req, res) => {
    res.send("hello from express");
});

app.listen(5000, () => {
    console.log("Server is running on port 5000");
});