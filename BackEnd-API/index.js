const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Hello pretty World")
});

const Port = process.env.PORT || 5000

app.listen(Port, () => {
    console.log(`application running on port ${Port}`);
});