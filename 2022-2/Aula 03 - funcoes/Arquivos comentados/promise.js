//As Promises são uma evolução do trabalho com programação assíncrona, com ela temos uma promessa, temos intenção. Podemos dizer assim: eu quero executar uma coisa, se ela der certo, nós vamos resolver, grave essa palavra, RESOLVE e se der algum problema, vamos rejeitar essa promessa (REJECT). 

// em Promise não é necessário passar uma função de retorno (tirar os callbacks)
//
function soma (x){ 
    return new Promise ((resolve, reject)=>{//dentro do return vou dizer que o processamento é assíncrono       (iniciar a Promise). Toda vez que criar a Promise, passar uma função dentro dela, vamos criar uma arrowfunction e os dois parâmetros serão o resolve e o reject.
        setTimeout(()=>{
            resolve(x + 5000);
        }, 3000);

    })
   
}

soma(201).then((resultado)=>{ //tenho dois parâmetros para tratar, se eu quero tratar o resolve, ou seja, se deu certo, eu uso o .then, se der algo errado, posso tratar no .catch.
    console.log(resultado);
})