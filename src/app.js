const express = require("express")
const path = require("path");
const hbs= require("hbs")
  const User=require("./models/usermessage")
require("./db/conn")
const Port = process.env.PORT || 3000;
const app = express();
// console.log("path =", path.join(__dirname,.))
const static_path=path.join(__dirname,"../public");
const view_path=path.join(__dirname,"../templates/views");
const partial_path=path.join(__dirname,"../templates/partials");

console.log(static_path);

// for using bootstrap and jquery 

app.use("/css",express.static(path.join(__dirname,"../node_modules/bootstrap/dist/css")));
app.use("/js",express.static(path.join(__dirname,"../node_modules/bootstrap/dist/js")));
app.use("/jq",express.static(path.join(__dirname,"../node_modules/jquery/dist")));
app.use(express.static(static_path));
app.use(express.urlencoded({extended:false}))
app.set("views",view_path);
hbs.registerPartials(partial_path);
app.set("view engine","hbs")
app.get("/", (req, res) => {
    res.render("index");
})

app.post("/contact",async(req,res)=>{
try {
    // res.status(201).send(req.body);
    const userData= new User (req.body);
    //console.log(userData);
    await userData.save();
    res.status(201).render("index");
} catch (error) {
    res.status(500).send(error);
}
})
app.listen(Port, () => {
    console.log(` live server hosted at ${Port}`);
})