const arr = [1, 22, 7, 33, 12];

function mergeArrays(leftArray, rightArray) {
    let mergedArr = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
        if (leftArray[leftIndex] < rightArray[rightIndex]) {
            mergedArr.push(leftArray[leftIndex]);
            leftIndex++;
        } else {
            mergedArr.push(rightArray[rightIndex]);
            rightIndex++;
        }
    }
    while (leftIndex < leftArray.length) {
        mergedArr.push(leftArray[leftIndex]);
        leftIndex++;
    }
    while (rightIndex < rightArray.length) {
        mergedArr.push(rightArray[rightIndex]);
        rightIndex++;
    }
    return mergedArr;
}
function mergeSort(arr) {
    if (arr.length < 2) {
        return arr;
    }
    const middle = Math.ceil(arr.length / 2);
    const leftArray = arr.slice(0, middle);
    const rightArray = arr.slice(middle);

    return mergeArrays(mergeSort(leftArray), mergeSort(rightArray));
}

const sortedArray = mergeSort(arr);
console.log(sortedArray);