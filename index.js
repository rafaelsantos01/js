const { Axios } = require("axios");

let pessoa1 = {
  nome: "Carlos",
  idade: 30,
  cidade: "São Paulo",
};

let pessoa2 = {
  nome: "Felipe",
  idade: 40,
  cidade: "RJ",
};

const pessoas = [pessoa1, pessoa2];

for (let i = 0; i < pessoas.length; i++) {
  if (pessoas[i].idade >= 30) {
    console.log(pessoas[i].nome);
  }
}
