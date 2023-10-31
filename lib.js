function avg(numbers) {
    let s = numbers.reduce((prev, curr) => prev + curr, 0);
    return s / numbers.length;
}
function prime(num) {
    if(num<2) {
        return false;
    }
    for (let i=2; i*i<=num; i++) {
        if(num%i===0) {
            return false;
        }
    }
    return true;
}

function fact(num) {
    if(num>15) {
        return -1;
    }
    
    let fact=1;
    for(let i=num; i>0; i--) {
        fact=fact*i;
    }
    return fact;
}
module.exports = {
    avg,
    prime,
    fact
}