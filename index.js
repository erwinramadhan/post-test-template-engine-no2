const express = require("express")
const app = express();
const axios = require("axios")

app.set("view engine", "ejs")

app.get('/', (req, res)=>{
    res.render("index", {title: "Homepage"})
})

app.get('/about', (req, res)=>{
    res.render("about", {title: "About"})
})

app.get('/greet', (req, res)=>{
    res.render('greet', {nama: req.query.name})
})

app.get('/news', (req, res)=>{
    // res.render("news", {title: "Berita"})
    const url = "https://berita-indo-api.vercel.app/v1";

    axios.get(`${url}/cnbc-news`)
    .then(result =>{
        res.render("news", {title: "Berita", news: result.data.data})
    })
})

app.get('/corona', (req, res) => {
    const url = "https://api.kawalcorona.com/indonesia/provinsi/";
    
    axios.get(`${url}`)
    .then(result => {
        res.render("corona", { title: "Data Corona", corona: result.data})
    })
})

app.listen(3030, ()=> console.log("Server Berjalan"))