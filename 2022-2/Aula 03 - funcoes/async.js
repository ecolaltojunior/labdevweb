function soma(x){
    return new Promise((resolve,reject)=>{
        if(Number(x)==NaN || Number(x)==undefined || typeof x != 'number'){
            reject('Que burro, dá zero pra ele!')
        }
         setTimeout(()=>{
            resolve(x + 5000)
        
        },3000)
    })
      
}
async function main(){
    try {
        const resultado = await soma(3000)
        console.log(`Resultado: ${resultado}`)
    } catch (error) {
        console.log(`Lascou: ${error}`)
    }
}

main()
  

 