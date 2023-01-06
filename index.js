
const prompt = require('prompt-sync')();

const alturas = []

// Implementar a entrada de dados
for (let aluno = 1; aluno <= 10; aluno++) {
  const altura = parseFloat(prompt(`Digite a altura do aluno ${aluno}:`));
  alturas.push(altura);
}
// Implementar o processamento de dados
// Fazer for dentro de for
for (let aluno = 0; aluno < 10; aluno++) {
  var contador = 0;

  for (let tamanho = 0; tamanho < 10; tamanho++) {
    if (alturas[aluno] > alturas[tamanho]) {
      contador++;
    }
  }
  console.log(`aluno ${aluno + 1}: maior que ${contador} aluno(s)`);
}
// Implementar a saída de dados
