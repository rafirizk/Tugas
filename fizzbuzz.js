var fibonacci = (num)=>{
    return num < 3 ? 1: fibonacci(num - 1) + fibonacci (num - 2)
}
console.log(fibonacci(4))