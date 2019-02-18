let input = prompt("Digite algo:");

//reverso = input.split('').reverse().join('');
//alert(reverso);

let reverso = "";

for (i = input.length - 1; i >= 0; i--){
    reverso += input[i];
}

alert(reverso);