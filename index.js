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
const mssql = require("mssql");
const config = {
    server: '101.99.13.2',
    user:'sa',
    password:'z@GH7ytQ',
    database:'T2005E_LMAO'
}
// connect db
mssql.connect(config,function (err) {
    if(err) console.log(err);
    else console.log("ket noi DB thanh cong!");
})
// tao doi tuong truy van
const db = new mssql.Request();

app.get("/",function (req,res) {
    let sql_text='select top 2 * from T2005E_LMAO_Event order by NgayDienRa desc ;select top 2 * from T2005E_LMAO_TinTuc order by NgayDang desc;select top 4 * from T2005E_LMAO_BaiHat,T2005E_LMAO_NgheSi where T2005E_LMAO_BaiHat.IDNgheSi=T2005E_LMAO_NgheSi.IDNgheSi order by SoLuongDaBan desc;select top 8 * from T2005E_LMAO_BaiHat,T2005E_LMAO_NgheSi where T2005E_LMAO_BaiHat.IDNgheSi=T2005E_LMAO_NgheSi.IDNgheSi order by NgayPhatHanh desc';
    db.query(sql_text,function (err,rows) {
        if(err) res.send(err);
        else res.render("home",{
            events:rows.recordsets[0],
            tintucs:rows.recordsets[1],
            topsellings:rows.recordsets[2],
            singles:rows.recordsets[3],
        });
    })
})
app.get("/dang-ky",function (req,res) {
    res.render("dangky");
})
app.get("/dang-nhap",function (req,res) {
    res.render("dangnhap");
})
app.get("/chitiettintuc",function (req,res) {
    res.render("chitiettintuc");
})
// render about-us, liveshow
app.get("/about-us",function (req,res){
    res.render("aboutus")
})
app.get("/live-show",function (req,res){
    res.render("liveshow")
})
// render tintuc
app.get("/tintuc",function (req,res) {
    res.render("tintuc")
})
// render the loai, nghe si
app.get("/EDM",function (req,res) {
    res.render("EDM");
})
app.get("/Rap",function (req,res) {
    res.render("Rap-HipHop");
})
app.get("/Pop",function (req,res) {
    res.render("Pop");
})
app.get("/Vietnam",function (req,res) {
    res.render("singer");
})
app.get("/us-uk",function (req,res) {
    res.render("us-uk");
})
app.get("/korea",function (req,res) {
    res.render("korea");
})
app.get("/top-selling",function (req,res) {
    res.render("Top-selling");
})
app.get("/thanh-toan",function (req,res) {
    res.render("buy");
})

// render about us, liveshow
app.get("/about-us",function (req,res){
    res.render("aboutus")
})
app.get("/live-show",function (req,res){
    res.render("liveshow")
})