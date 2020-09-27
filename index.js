const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

// tao may chu
app.listen(PORT,function () {
    console.log("server is running...");
})

app.use(express.static("public"));
app.set("view engine","ejs");

// tao cau hinh ket noi Sql server
// const mssql = require("mssql");
// const config = {
//     server: '101.99.13.2',
//     user:'sa',
//     password:'z@GH7ytQ',
//     database:'test'
// }
// connect db
// mssql.connect(config,function (err) {
//     if(err) console.log(err);
//     else console.log("ket noi DB thanh cong!");
// // })
// // tao doi tuong truy van
// const db = new mssql.Request();

app.get("/",function (req,res) {
    res.render("home");
})
app.get("/dang-ky",function (req,res) {
    res.render("dangky");
})
app.get("/dang-nhap",function (req,res) {
    res.render("dangnhap");
})
app.get("/about-us",function (req,res){
    res.render("aboutus")
})
app.get("/live-show",function (req,res){
    res.render("liveshow")
})
