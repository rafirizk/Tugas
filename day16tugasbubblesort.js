arrData = [
    {nama: 'Keke',usia: 25,kelamin: 'Pria',pekerjaan: 'Guru'},
    {nama: 'Rafi',usia: 23,kelamin: 'Wanita',pekerjaan: 'Entrepreneur'},
    {nama: 'Jamal',usia: 34,kelamin: 'Pria',pekerjaan: 'Pegawai'}
]

var inputData = ()=>{
    arrData.push(
                    {
                        nama: upperCase(document.getElementById('inputname').value), 
                        usia: document.getElementById('inputage').value, 
                        kelamin: document.querySelector('input[name="inputgender"]:checked').value, 
                        pekerjaan: upperCase(document.getElementById('inputjob').value)
                    }
                )
    renderData()
}

var upperCase = (name)=>{
    var nameUpper =  name.split('');
    nameUpper.splice(0, 1, nameUpper[0].toUpperCase())
    return nameUpper.join('')
}

var renderData = (e)=>{
    var output = arrData.map((val, ind)=>{
        return  `<tr>
                <td>${ind+1}</td>
                <td>${val.nama}</td>
                <td>${val.usia}</td>
                <td>${val.kelamin}</td>
                <td>${val.pekerjaan}</td>
                </tr>`
    }).join('')
    document.getElementById('render').innerHTML = output
}

let bubbleSort = (arr, prop) => {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len-1; j++) {
            if (arr[j][prop] > arr[j+1][prop]) {
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
};

var sort = (val)=>{
    bubbleSort(arrData, val)
    renderData()
}