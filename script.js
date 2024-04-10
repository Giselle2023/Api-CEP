
const input = document.querySelector('input');
const content = document.querySelector('.main');



function buscarCep(value){    
    const url = `https://viacep.com.br/ws/${value}/json/`;
    
  const result =  fetch(url).then(response => response.json())
    .then(data =>{
        
        return data

    })
    
    return result

}


document.querySelector('button').addEventListener('click', async ()=>{
  
    const result = await buscarCep(input.value);

  if(input.value == ''){
    return
  }
  if(input.value =! result.cep){
      return  
  }

   content.style.display = 'block'

  let estado = document.querySelector('#estado');
  let bairro = document.querySelector('#bairro');
  let cep = document.querySelector('#cep');
  let rua = document.querySelector('#rua');
  let ddd = document.querySelector('#ddd');

  bairro.innerHTML = result.bairro;
  estado.innerHTML = result.uf;
  cep.innerHTML = result.cep;
  rua.innerHTML = result.logradouro;
  ddd.innerHTML = result.ddd;

})