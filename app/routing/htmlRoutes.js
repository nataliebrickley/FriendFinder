const express = require('express');
const app = express();
const path = require("path");
const PORT = 3000;

module.exports = (app) => {
    app.get("/survey", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });
}