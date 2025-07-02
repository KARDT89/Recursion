function fibs(input) {
    if (input <= 0) return [];
    if (input === 1) return [0];

    let fib = [0, 1];
    for (let i = 2; i < input; i++) {
        fib.push(fib[i - 1] + fib[i - 2]);
    }
    return fib;
}

function fibsRec(input) {
    if (input <= 0) return [];
    if (input === 1) return [0];
    if (input === 2) return [0, 1];

    let fib = fibsRec(input - 1);
    fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
    return fib
}

console.log(fibs(8));
console.log(fibsRec(8));
