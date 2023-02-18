const express = require('express')
const app = express();
const PORT = 3000;
const {area} = require("./area");

app.get("/home", (req, res)=>{
    res.send("hello user! <br> navigate to <b>/area</b> and pass the radius <b>r</b> in query to find the area of a circle")
})

app.get("/area", (req, res)=>{
    let r = req.query.r;
    areaOfCircle = area(r);
    res.send(`area of circle with radius ${r} is ${areaOfCircle}`)
});

app.listen(PORT, ()=>{
    console.log("server is runninng")
})

