arrChar = []
var checkpassword = (e)=>{
    e.preventDefault()
    var passwordInput = document.getElementById('password').value
    for (let i=0; i<passwordInput.length; i++){
        character = passwordInput.charAt(i)
        if (!isNaN(character * 1)){
            arrChar.push('number')
        }else{
            if (character === character.toUpperCase()){
                arrChar.push('uppercase')
            } 
            if(character === character.toLowerCase()){
                arrChar.push('lowercase')
            }
        }
    }
    if(passwordInput.length < 8){
        document.getElementById('passwordstrength').innerHTML = 'Password harus lebih dari 8 karakter';
    }else if (arrChar.includes('number') && arrChar.includes('lowercase') && arrChar.includes('uppercase')){
        document.getElementById('passwordstrength').innerHTML = 'Kekuatan Password KUAT'
    }else if ((arrChar.includes('number') && arrChar.includes('lowercase')) || (arrChar.includes('uppercase') && arrChar.includes('lowercase')) || arrChar.includes('number') && arrChar.includes('uppercase')){
        document.getElementById('passwordstrength').innerHTML = 'Kekuatan Password SEDANG'
    }else if (arrChar.includes('number') || arrChar.includes('lowercase') || arrChar.includes('uppercase')){
        document.getElementById('passwordstrength').innerHTML = 'Kekuatan Password LEMAH'
    }
}