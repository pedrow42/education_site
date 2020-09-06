//servidor
const express = require('express')
const server = express()

const {pageLanding, pageStudy, pageGiveClasses} = require('./pages')
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