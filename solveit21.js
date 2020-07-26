let z = ''
for (let i = 0; i < 6; i++) {
    for (let j = i; j < 6; j++ ){
        z += ' ';
    }for (let j = 0; j < i; j++ ){
        z += '* '
    }
    z += '\n'
}

console.log(z)

for (let i = 0; i < 6; i++) {
    for (let j = 0; j < i; j++ ){
        z += ' ';
    }for (let j = i; j < 6; j++ ){
        z += '* ';
    }
    z += '\n'
}

console.log(z)