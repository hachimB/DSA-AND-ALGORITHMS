`
    Implementation of the recursive binary search algorithm in JS
        Time complexity: O(log n)
        Space complexity: O(log n)
`

const arr = [1, 3, 4, 5, 6, 7, 8, 9, 12, 14, 16, 18, 20]
const t = 20


// #1
const recursive = (arr, target, start, end) => {
    if(start > end) return false;
    
    const middle = Math.floor((start + end) / 2);
    if (target === arr[middle]) return true;

    else if (target < arr[middle]) {
        return recursive(arr, target, start, middle - 1);
    }
    else {
        return recursive(arr, target, middle + 1, end);
    }
}



// #2
const recursive_binary_search = (array, target) => {
    if (array.length === 0) {
        return false
    }
    let middlePoint = Math.floor(array.length / 2);

    if (array[middlePoint] === target) {
        return true
    }
    else {
        if (target > array[middlePoint]) {
            return recursive_binary_search(array.slice(middlePoint + 1), target)
        }
        else {
            return recursive_binary_search(array.slice(0, middlePoint), target)
        }
    }
}



// function to verify the results
const verify = (result) => {
    if (!result) {
        console.log("The target does not exist in the list")
        return
    }
    console.log(`The target is found`);
}



// Test of the second function (recursive_binary_search)
const start = performance.now()
const result = recursive_binary_search(arr, t)
const end = performance.now()

verify(result)
console.log(`RUNTIME: ${end-start}`)



// Test of the first function (recursive)
const res = recursive(arr, 99, 0, arr.length - 1);
console.log(res);
