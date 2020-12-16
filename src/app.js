const express = require("express")
const path = require("path");
require("./db/conn")
const Port = process.env.PORT || 3000;
const app = express();
// console.log("path =", path.join(__dirname,.))
const static_path=path.join(__dirname,"../public")

console.log(static_path);

// for using bootstrap and jquery 

app.use("/css",express.static(path.join(__dirname,"../node_modules/bootstrap/dist/css")));
app.use("/js",express.static(path.join(__dirname,"../node_modules/bootstrap/dist/js")));
app.use("/jq",express.static(path.join(__dirname,"../node_modules/jquery/dist")));
app.use(express.static(static_path));
app.set("view engine","hbs")
app.get("/", (req, res) => {
    res.render("index");
})
app.get("/contact", (req, res) => {
    res.render("contact");
})

app.listen(Port, () => {
    console.log(` live server hosted at ${Port}`);
})