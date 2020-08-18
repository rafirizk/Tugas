a = []
do{
    angka = prompt("Masukkan Angka")
    if (angka >= 0){
        a.push(parseInt(angka))
    }
} while (angka >= 0)
console.log(a)

for (let i=0; i<a.length-1;i++){
    if (a[i] > a[i+1]){
      b = a[i]
      break
    }else{
      b = a[i + 1]
    }
  }
  console.log(`Nilai terendah : ${b}`)
  
  for (let i=0; i<a.length-1;i++){
    if (a[i] < a[i+1]){
      c = a[i]
      break
    }else{
      c = a[i + 1]
    }
  }
console.log(`Nilai terendah : ${c}`)