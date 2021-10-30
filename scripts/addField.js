document.querySelector('#add-time')
.addEventListener('click', cloneField);
function cloneField(){
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)
    const fields = newFieldContainer.querySelectorAll('input')
    fields.forEach(function(field){
        field.value = ""
    })
    
    let a = document.createElement('a');
    a.classList = 'close'
    a.innerHTML = 'x'
    
    newFieldContainer.appendChild(a)
    document.querySelector('#schedule-items').appendChild(newFieldContainer)

    newFieldContainer.querySelector('a').addEventListener('click', (a)=>{
        let key = a.target.closest('.schedule-item');
        key.remove()
    })
    
};
