var express = require("express"),
    app     = express(),
    path    = require("path");


app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));


// Routes=================

app.get("/", function (req, res){
  res.render("landing");
})

app.get("/singing_circles", function(req, res){
  res.sendFile(path.join(__dirname+'/views/circles.html'));
})
app.get("/color_game", function(req, res){
  res.sendFile(path.join(__dirname+'/views/colorgame.html'));
})

//listening Route
app.listen(process.env.PORT || 3000, function(){
    console.log("Server has started!!");
});
