let z = ''
// for (let i = 0; i < 5; i++) {
//         for (let j = i; j < 5; j++ ){
//         z += '* ';
//     }
//     z += '\n'
// }
for (let i = 0; i < 7; i++) {
    for (let j = 0; j < i; j++ ){
    z += '* ';
}
z += '\n'
}

console.log(z)

// for (let i = 0; i < 9; i++) {
//     for (let j = 0; j < 5; j++ ){
//     z += '* ';
//     if (i+j == 4){
//         break;
//     }
//     else if (j+4 == i){
//         break;
//     }
//     }
// z += '\n'
// }

// console.log(z)