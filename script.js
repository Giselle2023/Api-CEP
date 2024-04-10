
const input = document.querySelector('input');

function buscarCep(){

    const cepInput = input.value;
    const url = `https://viacep.com.br/ws/${cepInput}/json/`;

    const container = document.createElement('div')
    


    if(cepInput == ''){
        return
    }


    fetch(url).then(response => response.json())
    .then(data =>{
        container.innerHTML = `
        <br>
        <strong>Cep</strong>: ${data.cep} <br>
        <strong>Estado</strong>: ${data.uf} <br>
        <strong>Localidade:</strong>: ${data.localidade} <br>
        <strong>Bairro</strong>: ${data.bairro} <br>
        <strong>Logradouro</strong>: ${data.logradouro} <br>
        <strong>DDD</strong>: ${data.ddd} <br>

        `
    })
 
 document.body.appendChild(container)

}


document.querySelector('button').addEventListener('click',()=>{
    buscarCep()
})