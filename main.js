function ClicarBotao() {
  let cep = document.getElementById("cep").value;
  if (cep.length == 8) {
    BuscarDados(cep);
    document.querySelector(".form-error").innerHTML = "";
  } else {
    let container = document.querySelector(".form-error");
    var paragrafo = document.createElement("p");
    container.classList.add("error");
    paragrafo.innerHTML =
      "O CEP deve conter 8 dígitos. Por favor, digite novamente.";
    container.append(paragrafo);
  }
}

async function BuscarDados(cep) {
  console.log(cep);
  let dados = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then((response) => response.json())
    .then((data) => data)
    .catch((e) => console.log("Deu erro: " + e, message));

  PreencherFormulario(dados);
}

function PreencherFormulario(dados) {
  let logradouro = document.getElementById("logradouro");
  logradouro.value = dados.logradouro;
  let bairro = document.getElementById("bairro");
  bairro.value = dados.bairro;
  let cidade = document.getElementById("cidade");
  cidade.value = dados.localidade;
  let estado = document.getElementById("estado");
  estado.value = dados.uf;
}

function LimparInputs() {
  document.getElementById("cep").value = "";
  document.getElementById("logradouro").value = "";
  document.getElementById("bairro").value = "";
  document.getElementById("cidade").value = "";
  document.getElementById("estado").value = "";
  document.querySelector(".form-error").innerHTML = "";
}
