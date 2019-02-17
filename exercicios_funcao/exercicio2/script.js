let numero = Math.floor(Math.random()*50);
console.log(numero);

let adivinha = prompt("Entre 0 e 50, adivinhe o número:");

if (adivinha == numero){
    alert(`Acertou!`);
}else{
    if (adivinha > numero){
        alert(`O número é menor`);
    } else{
        alert(`O numero é maior`)
    }
}