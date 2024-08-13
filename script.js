function fibonacci(num) {
// your code here
	 if (num === 1) return 0;
    if (num === 2) return 1;

    let a = 0, b = 1, fib = 1;

    for (let i = 3; i <= num; i++) {
        fib = a + b;
        a = b;
        b = fib;
    }

    return fib;
}

module.exports = fibonacci;
