`
    Implementation of the linear search algorithm in JS
        Time complexity : O(n)
        Space complexity: O(1)
`

const arr = [1, 3, 4, 5, 6, 7, 8, 9, 12, 14, 16, 18, 20]
const t = 200

const linear_search = (array, target)=> {
    for(let i = 0; i < array.length; i++) {
        if(array[i] === target) return i
    }
    return -1
}

const verify = (index) => {
    if (index === -1) {
        console.log("The target does not exist in the list")
        return
    }
    console.log(`The target is found at the index ${index}`);
}



const start = performance.now()
const index = linear_search(arr, t)
const end = performance.now()

verify(index)
console.log(`RUNTIME: ${end-start}`)