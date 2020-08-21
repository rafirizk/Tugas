let cekkoin = (koin)=>{
    output = 0
    while(koin>=1){
        if (koin/25 >= 1){
            output += Math.floor(koin/25)
            koin = koin%25
        }else if (koin/10 >= 1){
            output += Math.floor(koin/10)
            koin = koin%10
        }else if (koin/5 >= 1){
            output += Math.floor(koin/5)
            koin = koin%5
        }else if (koin/1 >= 1){
            output += Math.floor(koin/1)
            koin = 0
        }
    }
    return output
}

console.log(cekkoin(31))