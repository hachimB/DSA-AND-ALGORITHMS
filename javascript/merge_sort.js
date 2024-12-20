const merge_sort = (array) => {
    if (array.length <= 1) return array;

    let [left_subArray, right_subArray] = splt(array);

    const left = merge_sort(left_subArray);
    const right = merge_sort(right_subArray);

    return merge(left, right);
}


const splt = (array) => {
    const mid = Math.floor(array.length / 2);
    const left = array.slice(0, mid);
    const right = array.slice(mid, array.length);
    return [left, right];
}


const merge = (left, right) => {
    let i = 0;
    let j = 0;
    let sortedArray = [];
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            sortedArray.push(left[i]);
            i++;
        }
        else {
            sortedArray.push(right[j]);
            j++;
        }
    }
    while(i < left.length) {
        sortedArray.push(left[i]);
        i++;
    }

    while(j < right.length) {
        sortedArray.push(right[j]);
        j++;
    }

    return sortedArray;
}

// Test

const unsortedArray = [123, 45, 67, 33, 9, 14, 8, 1000, 23, 1];

const sortedArray = merge_sort(unsortedArray);
console.log(sortedArray);