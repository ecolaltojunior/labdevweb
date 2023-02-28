function sum (x){
    return new Promise ((resolve, reject)=>{
        if(Number(x)==NaN || Number (x)==undefined || typeof x != 'number'){
            reject('Que burro, dá zero pra ele!');
        }
        setTimeout(()=>{
            resolve(x + 5000);
        }, 3000);

    })
   
}
async function main(){
    try{
        const resultado = await sum(3000); //toda vez que eu quiser executar uma função cujo retorno é uma Promise, eu coloco o await. Mas para colocar o await, tenho que usar o try catch para tratar o resolve e o reject.
        console.log(`Resultado certo: ${resultado}`)
    } catch (error){
        console.log(`FUDEU: ${error}`)
    }
    
}

main();