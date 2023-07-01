
var a = []

function adicionar(){

    for(var i = 0; i < a.length; i++){
        document.getElementsByClassName('registro')[i].classList.remove('ultimo')
    }

    var b = {}
    
    b.primeiro = document.querySelector('#fname').value 
    b.ultimo = document.querySelector('#lname').value

    a.push(b)

    console.log(a)

    var registro = document.createElement('div')
    registro.innerHTML = (b.primeiro+'<br>'+b.ultimo)
    registro.classList.add('registro')
    registro.classList.add('ultimo')
    document.getElementsByClassName('registros')[0].insertAdjacentElement('beforeend',registro)

    document.querySelector('#fname').value =''
    document.querySelector('#lname').value =''
}

