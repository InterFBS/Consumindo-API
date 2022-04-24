const cep = document.querySelector("#cep");
//constante que pega os dados e joga numa resulta
const showData = (result) => {
  //Para cada campo do result, vê se a propriedade pertece ao objeto
  for (const campo in result) {
    if (Object.hasOwnProperty.call(result, campo)) {
      //Se objeto pertece ao campo, vai mostra seu objeto(campo)
      if (document.querySelector("#"+campo))
      console.log(campo)
    }
  }
}
//Criar um evento ao retirar o mouse de cima do campo, mostrar o que foi digitado.
cep.addEventListener("blur", (e) => {
  //Encontrar o traço (-) do CEP, e se encontrar retirar o traço.
  let search = cep.value.replace("-", "");
  //Definições para acesso ao via cep
  const options = {
    method: "GET",
    mode: "cors",
    cache: "default",
  };
//Acessar uma URL utilizando FecthAPI com as opções das definições que foram definidas anteriormente.
  fetch(`https://viacep.com.br/ws/${search}/json/`, options)
    .then((response) => {
      response.json()
        .then(data => showData(data))
    })
    .catch(e => console.log("Deu erro: "+ e.message))
})

