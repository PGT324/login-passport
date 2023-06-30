const express = require("express");
const { default: mongoose } = require("mongoose");
const path = require("path");

const app = express();
const port = 4000;

//public 폴더안의 파일을 연결(정적 파일)
app.use("/static", express.static(path.join(__dirname, "public")));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//view 엔진 세팅
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

//mongoose 접속
mongoose.connect("mongodb+srv://qkrrjsxo456:12345@cluster0.jod8kqz.mongodb.net/?retryWrites=true&w=majority")
    .then(() => {
        console.log("mongodb connected");
    })
    .catch((error) => {
        console.log(error);
    })

app.listen(port, () => {
    console.log(`Listening on ${port}`);
})

app.get("/login", (req, res) => {
    res.render("login");
})

app.get("/signup", (req, res) => {
    res.render("signup");
})