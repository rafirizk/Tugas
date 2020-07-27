let z = ''
for (let i = 0; i < 12; i++) {
    if (i < 6){
        for (let j = i; j < 6; j++ ){
            z += ' ';
        }
        for (let j = 0; j < i; j++ ){
            z += '* '
        }
    }
    else {
        for (let j = 7; j < i; j++ ){
            z += ' ';
        }
        for (let j = i; j < 12; j++ ){
            z += '* ';
        }
    }
    z += '\n'
}

// console.log(z)

var fruit = ["Jeruk", "Apel", "Anggur"];
var price = [10000, 15000, 20000];
var stock = [5, 7, 8];

var plusfruit = 'Mangga'
var plusprice = 10000
var plusstock = 0
var minfruit = 1

if (plusstock > 0){
    fruit.push(plusfruit);
    price.push(plusprice);
    stock.push(plusstock);
    }
else if (minfruit > 0){
    fruit.slice(minfruit);
}
console.log(fruit)
console.log(price)
console.log(stock)

