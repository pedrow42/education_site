//procurar o botão
document.querySelector('#add-time')
//quando clicar no botão...
.addEventListener('click', cloneField)
//...vai executar uma ação:
function cloneField(){
    //duplicar os campos...
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true) //bolean: true or false
    //...pegar os campos
    const fields = newFieldContainer.querySelectorAll('input')
    //para cada campo, limpar...
    fields.forEach(function(field){
        //pega o field do momento e limpa ele...
        field.value = ""
    })
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}
