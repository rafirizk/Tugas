totalangka = []
do{
    angka = prompt("Masukkan Angka")
    if (angka >= 0){
        totalangka.push(parseInt(angka))
    }
} while (angka >= 0)
console.log(totalangka)

if (!totalangka[1]){
    var a = totalangka.join('')
}else if (totalangka[0] > totalangka[1]){
    if (totalangka[0] > totalangka[2]){
        var a = totalangka[0]
    }
} else if (totalangka[1] > totalangka[2]) {
    var a = totalangka[1]
} else {
    var a = totalangka[2]
}
console.log(`Nilai tertinggi : ${a}`)


if (!totalangka[1]){
    var b = totalangka.join('')
}else if (totalangka[0] < totalangka[1]){
    if (totalangka[0] < totalangka[2]){
        var b = totalangka[0]
    }
} else if (totalangka[1] < totalangka[2]) {
    var b = totalangka[1]
} else {
    var b = totalangka[2]
}
console.log(`Nilai terendah : ${b}`)