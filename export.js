let sum = () => {

    let a = 5, b = 6;
    console.log('sum =' + (a + b));
}

const min = () => {
    let a = 10, b = 6;
    console.log('min =' + (a - b));
}

const obj = {
    sum, min
}
module.exports = obj;

