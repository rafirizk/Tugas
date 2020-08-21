let y = ''
let z = ''

for (let i = 0; i < 6; i++) {
        for (let j = 0; j < i; j++ ){
        if(j % 2 != 0){
            z += ' - ';
        }else{
            y += ' * ';
        }
    }
    z += '\n'
}

console.log(z)