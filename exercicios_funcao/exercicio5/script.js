let nome = prompt("Digite seu nome:");
let nota1 = prompt("Digite a nota da sua Prova 1:");
let nota2 = prompt("Digite a nota da sua Prova 2:");

function media(){
    nota1 = parseFloat(document.getElementById('nota1').value);
    nota2 = parseFloat(document.getElementById('nota2').value);
    resultado = parseFloat((nota1 + nota2)/2);
    alert(`Sua média é: ` +resultado);
}
