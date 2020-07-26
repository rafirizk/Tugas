let z = ''
for (let i = 0; i < 11; i++) {
    for (let j = i; j < 11; j++ ){
        z += ' ';
    }for (let j = 0; j < i; j++ ){
        z += '* ';
    }
    z += '\n'
}

console.log(z)