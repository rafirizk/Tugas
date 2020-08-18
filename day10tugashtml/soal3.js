var arrProduct = [
    { id: 1579581080923,category: 'Fast Food' , name: "Noodle", price: 3500, stock : 9},
    { id: 1579581081130,category: 'Electronic' , name: "Headphone", price: 4300000, stock :8 },
    { id: 1579581081342,category: 'Cloth' , name: "Hoodie", price: 300000, stock :7 },
    { id: 1579581081577,category: 'Fruit' , name: "Apple", price: 10000, stock :8 }
];
var arrCart = [];

var arrCategory = ["All", "Fast Food", "Electronic", "Cloth", "Fruit"];

let inputProduct = (input)=>{
    var output = input.map((val, index)=>{
        return (
            `<tr id="row${index}">
            <td>${val.id}</td>
            <td>${val.category}</td>
            <td id="name${index}">${val.name}</td>
            <td id="price${index}">${val.price}</td>
            <td id="stock${index}">${val.stock}</td>
            <td><button id="addproduct${index}" onclick="addProduct(${index});return false;">add</button></td>
            <td><button onclick="deleteProduct(${index})">delete</button></td>
            <td><button onclick="editProduct(${index})">edit</button></td>
            </tr>`)
    })
    document.getElementById('render').innerHTML = output.join('')
}

inputProduct(arrProduct)

let inputCategory = ()=>{
    var output = arrCategory.map((val, index)=>{
        return `<option value='${val}'>${val}</option>`
    }).join('')
    return output
}
document.querySelector('#categoryFilter').innerHTML = inputCategory()
arrCategory.splice(0,1)
document.querySelector('#categoryInput').innerHTML = inputCategory()


let funInputData = ()=>{
    var id = new Date().getTime()
    var name = document.querySelector('#nameInput').value
    var price = document.querySelector('#priceInput').value
    var category = document.querySelector('#categoryInput').value
    var stock = document.querySelector('#stockInput').value
    var obj = {id, name, price, category, stock}
    arrProduct.push(obj)
    inputProduct(arrProduct)
}

let filterProduct = ()=>{
    var filterCategory = document.getElementById('categoryFilter').value;
    var filterName = document.getElementById('keyword').value;
    var filterMinPrice = document.getElementById('min').value;
    var filterMaxPrice = document.getElementById('max').value;
    var arrFilter = arrProduct.filter((val)=>{
        var nameFilter = val.name.toLowerCase().includes(filterName.toLowerCase())
        var categoryFilter = val.category == filterCategory;
        if (filterCategory == "All"){
            categoryFilter = true;
        }
        var priceFilter = val.price >= filterMinPrice;
        var priceFilterMax = val.price <= filterMaxPrice;
        if(!filterMaxPrice){
            priceFilterMax = Math.max.apply(Math, arrProduct.map((o)=>{
                return o.price;
            }))
        }
        return nameFilter && categoryFilter && priceFilter && priceFilterMax
    })
    inputProduct(arrFilter)
}

let deleteProduct = (index)=>{
    var output = arrProduct.slice(index, index + 1).map((val)=>{
        return (
            `<td>${val.id}</td>
            <td>${val.category}</td>
            <td>${val.name}</td>
            <td>${val.price}</td>
            <td id="stock${index}">${val.stock}</td>
            <td><button onclick="yesDelete(${index})">yes</button></td>
            <td><button onclick="cancelDelete(${index})">cancel</button></td>
            `)
        })
    document.getElementById(`row${index}`).innerHTML = output.join('')
}

let yesDelete = (index)=>{
    arrProduct.splice(index, 1);
    inputProduct(arrProduct);
}

let cancelDelete = (index)=>{
    var output = arrProduct.slice(index, index +1).map((val)=>{
        return (
            `<td>${val.id}</td>
            <td>${val.category}</td>
            <td>${val.name}</td>
            <td>${val.price}</td>
            <td id="stock${index}">${val.stock}</td>
            <td><button onclick="addProduct(${index})">add</button></td>
            <td><button onclick="deleteProduct(${index})">delete</button></td>
            <td><button onclick="editProduct(${index})">edit</button></td>
            `)
    })
    document.getElementById(`row${index}`).innerHTML = output.join('')
}

let editProduct = (index)=>{
    var output = arrProduct.slice(index, index + 1).map((val)=>{
        var outputCat = arrCategory.map((val1, index)=>{
            if(val1 == val.category){
               return `<option value='${val1}' selected>${val1}</option>`
            }
            return `<option value='${val1}'>${val1}</option>`
        }).join('')
        return (
            `<td>${val.id}</td>
            <td><select id="editcategory${index}">${outputCat}</select></td>
            <td><input id="editname${index}" value="${val.name}"></td>
            <td><input id="editprice${index}" type="number" value="${val.price}"></td>
            <td><input id="editstock${index}" type="number" value="${val.stock}"></td>
            <td><button onclick="saveEdit(${index})">save</button></td>
            <td><button onclick="cancelEdit(${index})">cancel</button></td>
            `)
        })
    document.getElementById(`row${index}`).innerHTML = output.join('')
}

let cancelEdit = (index)=>{
    var output = arrProduct.slice(index, index +1).map((val)=>{
        return (
            `<td>${val.id}</td>
            <td>${val.category}</td>
            <td>${val.name}</td>
            <td>${val.price}</td>
            <td id="stock${index}">${val.stock}</td>
            <td><button id="addproduct${index}" onclick="addProduct(${index})">add</button></td>
            <td><button onclick="deleteProduct(${index})">delete</button></td>
            <td><button onclick="editProduct(${index})">edit</button></td>
            `)
    })
    document.getElementById(`row${index}`).innerHTML = output.join('')
}

let saveEdit = (index)=>{
    arrProduct[index].name = document.getElementById(`editname${index}`).value
    arrProduct[index].price = document.getElementById(`editprice${index}`).value
    arrProduct[index].stock = Number(document.getElementById(`editstock${index}`).value)
    var output = arrProduct.slice(index, index +1).map((val)=>{
        return (
            `<td>${val.id}</td>
            <td>${val.category}</td>
            <td>${val.name}</td>
            <td>${val.price}</td>
            <td id="stock${index}">${val.stock}</td>
            <td><button id="addproduct${index}" onclick="addProduct(${index})">add</button></td>
            <td><button onclick="deleteProduct(${index})">delete</button></td>
            <td><button onclick="editProduct(${index})">edit</button></td>
            `)
    })
    document.getElementById(`row${index}`).innerHTML = output.join('')
}

let addProduct1 = ()=>{
    arrCart = [...new Set(arrCart)]
    var output = arrCart.map((val, index)=>{
        return (`<tr id="rowCart${index}">
                <td>${val.id}</td>
                <td>${val.category}</td>
                <td id="name${index}">${val.name}</td>
                <td id="price${index}">${val.price}</td>
                <td id="amount${index}"><p><button onclick="mins(${index})">-</button> ${val.amount} <button onclick="plus(${index})">+</button></p></td>
                <td><button onclick="deleteCartProduct(${index})">delete</button></td>
                </tr>`)
    })
    document.getElementById('renderCart').innerHTML = output.join('')
}

let addProduct = (index)=>{
    event.preventDefault()
    arrProduct[index].amount = (typeof arrProduct[index].amount === 'undefined') ? 1 : arrProduct[index].amount + 1;
    arrCart.push(arrProduct[index])
    document.getElementById(`stock${index}`).innerHTML = arrProduct[index].stock -= 1
    if (arrProduct[index].stock === 0){
        document.getElementById(`addproduct${index}`).disabled = true
        alert(`Stok habis`)
    }
    addProduct1()
}

let mins = (index)=>{
    document.getElementById(`amount${index}`).innerHTML = `<p><button onclick="mins(${index})">-</button> ${arrCart[index].amount -= 1} <button onclick="plus(${index})">+</button></p>`
    arrProduct.forEach ((val, i)=>{
        if (val.id == arrCart[index].id){
            document.getElementById(`stock${i}`).innerHTML = val.stock += 1
        }
    })
}

let plus = (index)=>{
    document.getElementById(`amount${index}`).innerHTML = `<p><button onclick="mins(${index})">-</button> ${arrCart[index].amount += 1} <button onclick="plus(${index})">+</button></p>`
    arrProduct.forEach ((val, i)=>{
        if (val.id == arrCart[index].id){
            document.getElementById(`stock${i}`).innerHTML = val.stock -= 1
            if (val.stock === 0){
                document.getElementById(`addproduct${i}`).disabled = true
                document.getElementById(`plus${index}`).disabled = true
                alert(`Stok habis`)
            }
        }
    })
}

let deleteCartProduct = (index)=>{
    var output = arrCart.slice(index, index + 1).map((val)=>{
        return (
            `<td>${val.id}</td>
            <td>${val.category}</td>
            <td>${val.name}</td>
            <td>${val.price}</td>
            <td id="amount${index}"><p><button onclick="mins(${index})">-</button> ${val.amount} <button onclick="plus(${index})">+</button></p></td>            
            <td><button onclick="yesDeleteCart(${index})">yes</button> <button onclick="cancelDeleteCart(${index})">cancel</button></td>
            `)
        })
    document.getElementById(`rowCart${index}`).innerHTML = output.join('')
}

let yesDeleteCart = (index)=>{
    event.preventDefault()
    arrProduct.forEach ((val, i)=>{
        if (val.id == arrCart[index].id){
            val.stock += arrCart[index].amount
            document.getElementById(`stock${i}`).innerHTML = val.stock
            val.amount = 0
            document.getElementById(`addproduct${i}`).disabled = false
        }
    })
    arrCart.splice(index, 1);
    addProduct1();
}

let cancelDeleteCart = (index)=>{
    var output = arrCart.slice(index, index +1).map((val)=>{
        return (
            `<td>${val.id}</td>
            <td>${val.category}</td>
            <td>${val.name}</td>
            <td>${val.price}</td>
            <td id="amount${index}"><p><button onclick="mins(${index})">-</button> ${val.amount} <button onclick="plus(${index})">+</button></p></td>
            <td><button onclick="deleteCartProduct(${index})">delete</button></td>
            `)
    })
    document.getElementById(`rowCart${index}`).innerHTML = output.join('')
}

let checkout = ()=>{
    document.getElementById("transactionDetail").innerHTML = 'Transaction Detail'
    var output = arrCart.map((val)=>{
        return `${val.id} | ${val.category} | ${val.name} | ${val.price} x ${val.amount}<br>`
    }).join('')
    document.getElementById("details").innerHTML = output
    var total = 0
    arrCart.forEach((val)=>{
        total += val.price*val.amount;
    })
    var ppn = total*0.1
    var subtotal = total + ppn
    document.getElementById("total").innerHTML = `Subtotal ${total}<br>
                                                    PPn ${ppn}<br>
                                                    Total ${subtotal}`

}