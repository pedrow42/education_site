const proffys = [
    {name: "Diego Fernandes", 
    avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4", 
    whatsapp: "https://api.whatsapp.com/send?phone=5553981090277", 
    bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.", 
    subject: "Química", 
    cost: "20", 
    weekday: [],
    time_from: [], 
    time_to: []},
    
    {name: "Pedro Lopes", 
    avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4", 
    whatsapp: "https://api.whatsapp.com/send?phone=5553981090277", 
    bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.", 
    subject: "Química", 
    cost: "20", 
    weekday: [],
    time_from: [], 
    time_to: []}
]
function pageLanding(req, res){
    return res.render("site.html")
}
function pageStudy(req, res){
    return res.render("study.html")
}
function pageGiveClasses(req, res){
    return res.render("give-classes.html")
}

const express = require('express')
const server = express()

const nunjucks = require('nunjucks')
nunjucks.configure('src/views',{
    express: server,
    noCache: true,
})




server
.use(express.static("public")) // configurar arquivos estaticos (css, scripts, imgs)
.get("/", pageLanding) // rotas da aplicação
.get("/study", pageStudy) // rotas da aplicação
.get("/give-classes", pageGiveClasses) // rotas da aplicação
    
.listen(5550)