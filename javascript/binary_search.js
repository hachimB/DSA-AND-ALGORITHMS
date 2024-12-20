`
    Implementattion of the binary search algorithm
        Time complexity: O(log n)
        Space complexity: O(1)
`

const arr = [1, 3, 4, 5, 6, 7, 8, 9, 12, 14, 16, 18, 20]
const t = 1000

const binary_search = (array, target) => {
    let start = 0;
    let end = array.length - 1;

    while(start <= end) {
        let middlePoint = Math.floor((start + end) / 2)

        if(arr[middlePoint] === target) {
            return middlePoint;
        }
        else if(target > array[middlePoint]) {
            start = middlePoint + 1
        }
        else {
            end = middlePoint - 1
        }
    }
    return -1;
}


const verify = (index) => {
    if (index === -1) {
        console.log("The target does not exist in the list")
        return
    }
    console.log(`The target is found at the index ${index}`);
}



const start = performance.now()
const index = binary_search(arr, t)
const end = performance.now()

verify(index)
console.log(`RUNTIME: ${end-start}`)
