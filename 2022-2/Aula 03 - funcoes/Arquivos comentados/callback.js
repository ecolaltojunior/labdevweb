/*
PRIMEIRA PARTE

function soma (x){
    return x + 5000

}
    console.log(soma(270))

    comentário: isso daqui aconteceu porque nossa função é síncrona, ou seja, trabalha no mesmo ritmo do nosso código, mas nem sempre é assim.
    Vamos supor que esse 5000 veio de um banco de dados, ou seja, quero somar o valor que eu tenho com algo que estará no banco para ter o retorno. Para simular algo que demore, vamos usar a função setTimeout. Essa função permite você esperar um tempo e depois executar uma rotina.

SEGUNDA PARTE
    function soma (x){
    return setTimeout(()=>{
        return x + 5000
    },3000) *o tempo entra como segundo parâmetro, pois ele executará uma determinada tarefa após o tempo que está indicado no segundo parêmtro. O primeiro é uma arrowfunction onde vamos passar aquele return que a gente tinha na função síncrona.
    
}
Vamos criar agora uma função chamada escreve
function escreve(){
    console.log('Executando função escreve: ',soma(270))
}
* esta não é uma função assíncrona, ela é executada de forma linear. Olha o que acontece quando a gente chama a função escreve que é nosso console.log

escreve() **chamar a função antes de soma(270)

Ele não consegue trazer o resultado porque dentro da nossa função tem um timeout acontecendo que não conseguiu trazer o retorno. Não houve o tempo esperado para ele funcionar. Para isso a gente precisa criar um callback
*/



function soma (x, callback){
    return setTimeout(()=>{
        return callback(null, x + 5000);
    }, 3000);//espera três segundos e depois chama a função callback que eu já vou te dizer quem é e passa o primeiro parâmetro como nulo e depois como x + 5000
}
//TERCEIRA PARTE
function resolveSoma(err, resultado){ //primeiro parâmetro será sempre o erro e o segundo o resultado
    if(err) throw err; //no JavaScript quando vc não compara, significa que é implícito, que se tiver alguma coisa nessa variável, será verdadeiro e ele vai estourar o erro, ou seja, o throw vai parar o processamento e exibir o que aconteceu.
    console.log(resultado);
}

soma(201,resolveSoma) // vamos executar a função soma, chama o primeiro parâmetro que é o x e depois chama o callback que é o resolveSoma

//No node todas as APIS que são assíncronas, vão esperar como último parâmetro um callback e no callback o primeiro parâmetro é sempre para tratar erro. Mas aí você imagina, eu tenho 10 funções...tem que ter 10 funções de callback? O código vai ficando maior, mais complicado. Tem como melhorar os callbacks para o código não ficar enorme.