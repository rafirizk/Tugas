// totalangka = []
// do{
//     angka = prompt("Masukkan Angka")
//     if (angka >= 0){
//         totalangka.push(angka)
//     }
// } while (angka >= 0)
// console.log(totalangka)
// console.log(`Nilai tertinggi : ${a}`)
// console.log(`Nilai terendah : ${a}`)

let bubbleSort = (arr) => {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len-1; j++) {
            if (arr[j] > arr[j+1]) {
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
};

let highest = (arr)=>{
    if (arr[0]< arr){

    }
}

console.log(sort([3,5,7]))