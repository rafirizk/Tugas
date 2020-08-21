class Credentials{
    constructor(_username,_password,_role){
        this.username = _username,
        this.password = _password,
        this.role = _role;
    }
}

var credentials = [
    new Credentials('user1','1234','user'),
    new Credentials('admin1','1234','admin')
]

class DataMadding{
    constructor(_kegiatan,_hari,_poster){
        this.kegiatan = _kegiatan,
        this.hari = _hari,
        this.poster = _poster
    }
}

var datamadding = [
    new DataMadding('Lari','senin','https://cdn.idntimes.com/content-images/post/20200110/runner-running-shoes-on-track-sneakers-6007910264938ac120e014eb4c2d622c_600x400.jpg'),
    new DataMadding('Sepak Bola','selasa','https://upload.wikimedia.org/wikipedia/commons/b/b9/Football_iu_1996.jpg')
]

var harihari = ['Senin','Selasa','Rabu','Kamis','Jumat','Sabtu','Minggu']

let logIn = ()=>{
    var inputUsername = document.getElementById('userName').value
    var inputPassword = document.getElementById('passWord').value
    var inputLogin = credentials.filter((val)=> val.username == inputUsername && val.password == inputPassword)
    if(!inputLogin.length){
        document.getElementById('wrong').innerHTML = 'Username/Password Salah!'
    }
    else{
        if (inputLogin[0].role == 'admin'){
            document.getElementById('login').disabled = true
            loginClear()
            loginAdmin()
            document.getElementById('logoutButton').innerHTML = '<button id="logout" onclick="logOut()">Logout</button>'
        }else if (inputLogin[0].role == 'user'){
            document.getElementById('login').disabled = true
            loginClear()
            loginUser()
            document.getElementById('logoutButton').innerHTML = '<button id="logout" onclick="logOut()">Logout</button>'
        }
    }
    // while(menu) {
    // }
}

let loginClear = ()=>{
    document.getElementById('pUsername').innerHTML = 'Username: <input type="text" id="userName">'
    document.getElementById('pPassword').innerHTML = 'Password: <input type="password" id="passWord">'
}

let loginUser =()=>{
    output = datamadding.map((val, index)=>{
        return `<tr id="row${index}">
                <td>${index + 1}</td>
                <td>${val.kegiatan}</td>
                <td>${val.hari}</td>
                <td><img src="${val.poster}"></td>
                </tr>`
    }).join('')
    document.getElementById('render').innerHTML = output
}

let loginAdmin =()=>{
    output = datamadding.map((val, index)=>{
        return `<tr id="row${index}">
                <td>${index + 1}</td>
                <td>${val.kegiatan}</td>
                <td>${val.hari}</td>
                <td><img src="${val.poster}"></td>
                <td id="button${index}"><button id="editMadding${index}" onclick="edit(${index})">edit</button><button id="delete${index}" onclick="del(${index})">delete</button></td>
                </tr>`
    }).join('')
    document.getElementById('render').innerHTML = output
}

let edit = ()=>{

}

let del = (index)=>{
    document.getElementById(`button${index}`).innerHTML = `<button id="yes${index}" onclick="yes(${index})">yes</button><button id="cancel${index}" onclick="cancel(${index})">cancel</button>`
}

let yes = (index)=>{
    datamadding.splice(index, 1)
    loginAdmin()
}

let cancel = (index)=>{
    document.getElementById(`button${index}`).innerHTML = `<button id="editMadding${index}" onclick="edit(${index})">edit</button><button id="delete${index}" onclick="del(${index})">delete</button>`
}

let logOut = ()=>{
    document.getElementById('login').disabled = false
    document.getElementById('logoutButton').innerHTML = ''
    document.getElementById('render').innerHTML = ''
}

