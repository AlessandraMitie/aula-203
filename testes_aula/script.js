let filmes = [
    {titulo: 'Como treinar seu dragão', classificacao: '0'},
    {titulo: 'bla', classificacao: '12'},
    {titulo: 'x', classificacao: '14'},
    {titulo: 'oi', classificacao: '16'},
    {titulo: 'Como treinar', classificacao: '18'}
];

let idade = Number(prompt('Digite sua idade: '));

for (let item in filmes){
    if (idade >= filmes[item].classificacao) {
        console.log(filmes[item].titulo);
    }
}