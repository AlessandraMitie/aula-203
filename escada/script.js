let quantidadeDegrau = prompt("Digite o número de degraus que deseja");
let materialDegrau = prompt("Digite qual o tipo de material voce quer");

let escada = materialDegrau.toString();

for (let i=1; i <= quantidadeDegrau; i++){
    console.log(escada);
    escada += materialDegrau;
}