let z = ''
for (let i = 0; i < 10; i++) {
    for (let j = 0; j < i; j++ ){
        z += ' ';
    }for (let j = i; j < 10; j++ ){
        z += '* ';
    }
    z += '\n'
}

console.log(z)