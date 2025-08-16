const express = require("express");
const app = express();
const port = 8000;

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get(["/", "/index"], (req, res) => {
    res.render("index");
});
app.get("/about", (req, res) => res.render("about"));
app.get("/contact", (req, res) => res.render("contact"));
app.get("/services", (req, res) => res.render("services"));

app.use((req, res) => res.status(404).render("error"));

app.listen(port, () => console.log(`Server running on http://localhost:${port}`));