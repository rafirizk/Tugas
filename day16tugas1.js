class DataMadding{
    constructor(_kegiatan,_hari,_poster){
        this.kegiatan = _kegiatan,
        this.hari = _hari,
        this.poster = _poster
    }
}

var dayList = ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat']
var daySelect = dayList.map(val => `<option value="${val}">${val}</option>`).join('')

var datamadding = [
    new DataMadding('Lari',dayList[0],'https://cdn.idntimes.com/content-images/post/20200110/runner-running-shoes-on-track-sneakers-6007910264938ac120e014eb4c2d622c_600x400.jpg'),
    new DataMadding('Sepak Bola',dayList[1],'https://upload.wikimedia.org/wikipedia/commons/b/b9/Football_iu_1996.jpg')
]

var rend = ()=>{
    output = datamadding.map((val, index)=>{
        return `<tr id="row${index}">
                <td>${index + 1}</td>
                <td>${val.kegiatan}</td>
                <td>${val.hari}</td>
                <td><img src="${val.poster}"></td>
                <td id="button${index}"><button id="editMadding${index}" onclick="edit(${index})">edit</button><button id="delete${index}" onclick="del(${index})">delete</button></td>
                </tr>`
    }).join('')
    document.getElementById('render').innerHTML = output + '\n' + addData()
}

var del = (index)=>{
    datamadding.splice(index, 1);
    rend();
}

var edit = (index)=>{
    output = datamadding.map((val, index)=>{
        daySelect = dayList.map(val1,index1 =>{
            if (val.hari == val1){
                return `<option value='${index1}' selected>${val1}</option>`
            }else{
                return `<option value='${val1}'></option>`
            }
        })
        return `<td>${index + 1}</td>
                <td><input type="text" id="nameInput${datamadding.length}"></td>
                <td><select id="dayEdit${datamadding.length}">${daySelect}</select></td>
                <td><input type="text" id="picInput${datamadding.length}"></td>
                <td><button id="editactivity${datamadding.length}" onclick="editActivity(${datamadding.length})">Edit</button></td>`
    })
}

var addData = ()=>{
    output = `<tr id="row${datamadding.length}">
                <td>${datamadding.length + 1}</td>
                <td><input type="text" id="nameInput${datamadding.length}"></td>
                <td><select id="dayInput${datamadding.length}">${daySelect}</select></td>
                <td><input type="text" id="picInput${datamadding.length}"></td>
                <td><button id="add${datamadding.length}" onclick="addNew(${datamadding.length})">Add</button></td>
            </tr>`
    return output
}

var addNew = ()=>{
    var nameInput = document.getElementById(`nameInput${datamadding.length}`).value;
    var dayInput = document.getElementById(`dayInput${datamadding.length}`).value;
    var picInput = document.getElementById(`picInput${datamadding.length}`).value;
    datamadding.push(new DataMadding(nameInput,dayInput,picInput))
    rend()
}

