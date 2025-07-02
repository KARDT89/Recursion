function mergeSort(arr) {
    if (arr.length <= 1) return arr;

    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);

    let sortedLeft = mergeSort(left);
    let sortedRight = mergeSort(right);

    return merge(sortedLeft, sortedRight);
}

function merge(left, right) {
    let sorted = [];
    let i = 0;
    let j = 0;
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            sorted.push(left[i]);
            i++;
        } else {
            sorted.push(right[j]);
            j++;
        }
    }
    if (i < left.length) {
        sorted = sorted.concat(left.slice(i));
    }
    if (j < right.length) {
        sorted = sorted.concat(right.slice(j));
    }

    return sorted;
}

console.log(mergeSort([1, 2, 4, 7, 3, 5, 6, 8, 9]));
