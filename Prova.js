const prompt = require('prompt-sync')();

const questoes = ["q1","q2","q3","q4","q5"];
const peso = [1,1,1,3,4];
const aluno = prompt(`Insira o nome do aluno:`);
const gabarito= ["a","c","b","c","b"]
let acertos = 0

for(i=0;i<questoes.length;i++){
    let resposta = prompt(`${questoes[i]}:`)
    if(resposta == gabarito[i]){
        acertos = acertos + peso[i]
    }
}
console.log(`O aluno ${aluno} tirou ${acertos} na prova.`)