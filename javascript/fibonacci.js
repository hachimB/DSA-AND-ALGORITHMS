// Time complexity: O(n) - Space complexity: O(n)
const fibMemoize = (n, calculated={1 : 1, 2: 1}) => {
    if(n in calculated) return calculated[n];

    const result = fibMemoize(n - 1, calculated) + fibMemoize(n - 2, calculated);
    calculated[n] = result;
    return result;
}



// Time complexity: O(n) - Space complexity: O(1)
const fibIterative = (n) => {
    if (n <= 2) return 1;

    let last = 1;
    let secondLast = 1;
    for (let i = 2; i < n; i++) {
        const temp = last;
        last += secondLast;
        secondLast = temp;
    }
    return last;
}


console.log(fibMemoize(70));
console.log(fibIterative(70));
