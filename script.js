function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let current = arr[i]
        let j = i - 1
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = current;
    }
    return arr;
}

console.log(insertionSort([6, 3, 4, 2, 7, 10, 5, 11, 12, 13, 15, 8, 1]));
