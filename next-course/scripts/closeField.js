//procurar o botão
document.querySelector('#exit')
//quando clicar no botão...
.addEventListener('click', closeField)
//...vai executar uma ação:
var con = 0

function closeField(){
    //duplicar os campos...
    const getOut = document.querySelector('.schedule-item').remove() //

    con+=1
    console.log(con)
}
