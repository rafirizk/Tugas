class Credentials{
    constructor(_username,_password){
        this.username = _username,
        this.password = _password
    }
}

var credentials = [
    new Credentials('user1','1234'),
    new Credentials('admin1','1234')
]


let logIn = ()=>{
    var inputUsername = document.getElementById('userName').value
    var inputPassword = document.getElementById('passWord').value
    var inputLogin = credentials.filter((val)=> val.username == inputUsername && val.password == inputPassword)
    if(!inputLogin.length){
        document.getElementById('welcome').innerHTML = 'Username/Password Salah!'
    }
    else{
        loginClear()
        document.getElementById('welcome').innerHTML = 'Welcome!'
        document.getElementById('logoutButton').innerHTML = '<button id="logout" onclick="logOut()">Logout</button>'
    }
}

let loginClear = ()=>{
    document.getElementById('pUsername').innerHTML = 'Username: <input type="text" id="userName">'
    document.getElementById('pPassword').innerHTML = 'Password: <input type="password" id="passWord">'
}

let logOut = ()=>{
    document.getElementById('login').disabled = false
    document.getElementById('logoutButton').innerHTML = ''
    document.getElementById('welcome').innerHTML = ''
}

let register = ()=>{
    var inputUsername = document.getElementById('userName').value
    var inputPassword = document.getElementById('passWord').value
    var inputRegister = credentials.filter((val)=> val.username == inputUsername)
    if (!inputPassword || !inputUsername){
        document.getElementById('welcome').innerHTML = 'Masukkan Username/Password!!'
    }else if(inputRegister.length > 0){
        document.getElementById('welcome').innerHTML = 'Username sudah terpakai'
    } else if (!inputRegister.length && inputPassword){
        document.getElementById('welcome').innerHTML = 'Anda sudah teregistrasi, silahkan masukkan Username & Password'
        loginClear()
        credentials.push(new Credentials (inputUsername, inputPassword))
        console.log(credentials)
    }
}