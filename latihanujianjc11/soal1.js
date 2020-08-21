let lelang = (minute)=>{
    output = 10000
    for (let i=0; i<minute;i++){
        if ((i+1) % 4 != 0){
            output += Math.ceil(output*20/100)
        }else{
            output += Math.ceil(output*10/100)
        }
    }
    return output >= 30000000 ? 'barang sudah terjual': output
}

console.log(lelang(50))