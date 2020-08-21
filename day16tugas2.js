const checkpass = (passwordInput)=>{
    number = false
    letter = false
    length = passwordInput.length
    for (let i=0; i<passwordInput.length; i++){
        character = passwordInput.charAt(i)
        if (character == ' '){
            length--
        }
        if (isNaN(character)){
            letter = true
        }else{
            number = true
        }
    }
    if(length < 6){
        return 'Password harus lebih dari 6 karakter';
    }
    return number && letter ? 'Diterima':number ? 'Kurang huruf': letter ? 'Kurang angka': 'asd'
}


console.log(checkpass('ab1sada'))
console.log(checkpass('abasada'))
console.log(checkpass('1234567'))
console.log(checkpass('abc d1'))