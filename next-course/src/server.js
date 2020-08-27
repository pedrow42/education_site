const proffys = [
    {name: "Diego Fernandes", 
    avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4", 
    whatsapp: "53981090277", 
    bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.", 
    subject: "Química", 
    cost: "20", 
    weekday: [],
    time_from: [], 
    time_to: []},
    
    {name: "Pedro Lopes", 
    avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4", 
    whatsapp: "53999037982", 
    bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.", 
    subject: "Química", 
    cost: "20", 
    weekday: [],
    time_from: [], 
    time_to: []}
]
const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química",
]
const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
]
function getSubject(subjectNumber){
    const position = +subjectNumber -1
    return subjects[position]
}
function pageLanding(req, res){
    return res.render("site.html")
}
function pageStudy(req, res){
    const filters = req.query
    return res.render("study.html", {proffys, filters, subjects, weekdays})
}
function pageGiveClasses(req, res){
    const data = req.query
    //se tiver dados
    const isNotEmpty = Object.keys(data).length > 0
    if (isNotEmpty){
        data.subject = getSubject(data.subject)
        proffys.push(data) //adicionar data a lista de proffys
        return res.redirect("/study")
    }

    return res.render("give-classes.html", {subjects, weekdays})
}
//servidor
const express = require('express')
const server = express()
//configurando nunjucks(template engine)
const nunjucks = require('nunjucks')
nunjucks.configure('src/views',{
    express: server,
    noCache: true,
})

//inicio e configuração do servidor
server
.use(express.static("public")) // configurar arquivos estaticos (css, scripts, imgs)
.get("/", pageLanding) // rotas da aplicação
.get("/study", pageStudy) // rotas da aplicação
.get("/give-classes", pageGiveClasses) // rotas da aplicação
    
.listen(5550) //start no servidor