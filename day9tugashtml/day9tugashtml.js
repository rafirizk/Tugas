var name1 = document.querySelector("#name");
var price1 = document.querySelector("#price");
var category1 = document.querySelector("#category");

var function1 = ()=>{
    var condition = document.getElementsByName("condition");
    var condition1;
    for (let i = 0; i < condition.length; i++) {
        if(condition[i].checked){
            condition1 = condition[i].value
        }
    }
    
    let kondisi = [name1.value, price1.value, condition1, category1.value]
    var table = document.getElementById("product");
    var row = table.insertRow(-1);
    for (let i = 0; i <kondisi.length; i++){
        row.insertCell([i]) = kondisi[i]
    } 
    // row.insertCell(0).innerHTML = name1.value
    // row.insertCell(1).innerHTML = price1.value
    // row.insertCell(2).innerHTML = condition1
    // row.insertCell(3).innerHTML = category1.value

    console.log(name1.value, price1.value, condition1, category1.value)
}

var name2 = document.querySelector("#nameH");
var price2 = document.querySelector("#priceH");

var function2 = ()=>{
    var sex = document.getElementsByName("sex");
    var sex1;
    for (let i = 0; i < sex.length; i++) {
        if(sex[i].checked){
            sex1 = sex[i].value
        }
    }
    var stat = document.getElementsByName("stat");
    var stat1;
    for (let i = 0; i < stat.length; i++) {
        if(stat[i].checked){
            stat1 = stat[i].value
        }
    }
    let kondisi = [name2.value, price2.value, sex1, stat1]
    var table = document.getElementById("animal");
    var row = table.insertRow(-1);
    for (let i = 0; i < kondisi.length; i++){
        row.insertCell([i]).innerHTML = kondisi[i]
    }

    console.log(name2.value, price2.value, sex1, stat1)
}