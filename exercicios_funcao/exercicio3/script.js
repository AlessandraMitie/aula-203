let numero1 = Math.floor(Math.random()*10);
//Math.floor retira a parte flutuante dos números decimais
//*10 -> gerará números aleatórios no range de 0 a 9
let numero2 = Math.floor(Math.random()*10);
let numero3 = Math.floor(Math.random()*10);
let numero4 = Math.floor(Math.random()*10);
let numero5 = Math.floor(Math.random()*10);

let comparaSenha = [];

senhaRandom = "" + numero1 + numero2 + numero3 + numero4 + numero5;
console.log(senhaRandom);

let adivinha = prompt("Insira uma senha de 5 dígitos");
adivinhaSenha = adivinha.split("");

if(adivinha == senhaRandom){
    alert(`Senha correta!`)
}else{
    for(let i=0; i<=10; i==){
        for(let posicao in senha){
            if (adivinhaSenha == senha[posicao]){

            }
        }
}