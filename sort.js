// sorting techniques in javascript
// 1. bubble sort
// 2. selection sort
// 3. insertion sort
// 4. merge sort
// 5. quick sort
// 6. heap sort
// 7. counting sort
// 8. radix sort
// 9. bucket sort
// 10. shell sorts

// explain bubble sort

// Example 1
arr = [5, 3, 8, 4, 2];
let n = arr.length;
for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }
    }
}
console.log(arr); // [2, 3, 4, 5, 8]

// Example 2
arr = [5, 3, 8, 4, 2];
n = arr.length;
for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
        if (arr[j] < arr[j + 1]) {
            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }
    }
}
console.log(arr); // [8, 5, 4, 3, 2]

// 2. selection sort

// Example 3
arr = [5, 3, 8, 4, 2];
n = arr.length;
for (let i = 0; i < n - 1; i++) {
    let min = i;
    for (let j = i + 1; j < n; j++) {
        if (arr[j] < arr[min]) {
            min = j;
        }
    }
    if (min !== i) {
        let temp = arr[i];
        arr[i] = arr[min];
        arr[min] = temp;
    }
}
console.log(arr); // [2, 3, 4, 5, 8]

// 3. insertion sort

// Example 4
arr = [5, 3, 8, 4, 2];
n = arr.length;
for (let i = 1; i < n; i++) {
    let key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j];
        j--;
    }
    arr[j + 1] = key;
}
console.log(arr); // [2, 3, 4, 5, 8]

// 4. merge sort

// Example 5
arr = [5, 3, 8, 4, 2];
function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right);
}
function merge(left, right) {
    let result = [];
    let i = 0;
    let j = 0;
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }
    return result.concat(left.slice(i)).concat(right.slice(j));
}

console.log(mergeSort(arr)); // [2, 3, 4, 5, 8]

// 5. quick sort

// Example 6
arr = [5, 3, 8, 4, 2];
function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    let pivot = arr[0];
    let left = [];
    let right = [];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return quickSort(left).concat(pivot, quickSort(right));
}
console.log(quickSort(arr)); // [2, 3, 4, 5, 8]

// 6. heap sort

// Example 7
arr = [5, 3, 8, 4, 2];
function heapSort(arr) {
    let n = arr.length;
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(arr, n, i);
    }
    for (let i = n - 1; i > 0; i--) {
        let temp = arr[0];
        arr[0] = arr[i];
        arr[i] = temp;
        heapify(arr, i, 0);
    }
    return arr;
}
function heapify(arr, n, i) {
    let largest = i;
    let left = 2 * i + 1;
    let right = 2 * i + 2;
    if (left < n && arr[left] > arr[largest]) {
        largest = left;
    }
    if (right < n && arr[right] > arr[largest]) {
        largest = right;
    }
    if (largest !== i) {
        let temp = arr[i];
        arr[i] = arr[largest];
        arr[largest] = temp;
        heapify(arr, n, largest);
    }
}
console.log(heapSort(arr)); // [2, 3, 4, 5, 8]


// 7. counting sort

// Example 8
arr = [5, 3, 8, 4, 2];
function countingSort(arr) {
    let n = arr.length;
    let output = [];
    let count = [];
    let max = Math.max(...arr);
    for (let i = 0; i <= max; i++) {
        count[i] = 0;
    }
    for (let i = 0; i < n; i++) {
        count[arr[i]]++;
    }
    for (let i = 1; i <= max; i++) {
        count[i] += count[i - 1];
    }
    for (let i = n - 1; i >= 0; i--) {
        output[count[arr[i]] - 1] = arr[i];
        count[arr[i]]--;
    }
    return output;
}
console.log(countingSort(arr)); // [2, 3, 4, 5, 8]

// 8. radix sort

// Example 9
arr = [5, 3, 8, 4, 2];
function radixSort(arr) {
    let max = Math.max(...arr);
    for (let exp = 1; Math.floor(max / exp) > 0; exp *= 10) {
        countingSortForRadix(arr, exp);
    }
    return arr;
}
function countingSortForRadix(arr, exp) {
    let n = arr.length;
    let output = [];
    let count = [];
    for (let i = 0; i <= 9; i++) {
        count[i] = 0;
    }
    for (let i = 0; i < n; i++) {
        count[Math.floor(arr[i] / exp) % 10]++;
    }
    for (let i = 1; i < 10; i++) {
        count[i] += count[i - 1];
    }
    for (let i = n - 1; i >= 0; i--) {
        output[count[Math.floor(arr[i] / exp) % 10] - 1] = arr[i];
        count[Math.floor(arr[i] / exp) % 10]--;
    }
    for (let i = 0; i < n; i++) {
        arr[i] = output[i];
    }
}
console.log(radixSort(arr)); // [2, 3, 4, 5, 8]

// 9. bucket sort

// Example 10
arr = [5, 3, 8, 4, 2];
function bucketSort(arr) {
    let n = arr.length;
    let buckets = new Array(n);
    for (let i = 0; i < n; i++) {
        buckets[i] = [];
    }
    for (let i = 0; i < n; i++) {
        let index = Math.floor(n * arr[i] / 10);
        buckets[index].push(arr[i]);
    }
    for (let i = 0; i < n; i++) {
        buckets[i].sort((a, b) => a - b);
    }
    let result = [];
    for (let i = 0; i < n; i++) {
        result = result.concat(buckets[i]);
    }
    return result;
}
console.log(bucketSort(arr)); // [2, 3, 4, 5, 8]

// 10. shell sort

// Example 11
arr = [5, 3, 8, 4, 2];
function shellSort(arr) {
    let n = arr.length;
    for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
        for (let i = gap; i < n; i++) {
            let temp = arr[i];
            let j;
            for (j = i; j >= gap && arr[j - gap] > temp; j -= gap) {
                arr[j] = arr[j - gap];
            }
            arr[j] = temp;
        }
    }
    return arr;
}
console.log(shellSort(arr)); // [2, 3, 4, 5, 8]





// create sort method 

// sort method
// 1. sort method is used to sort the elements of an array in place and returns the sorted array.
// 2. The default sort order is according to string Unicode code points.
// 3. The time and space complexity of the sort cannot be guaranteed as it depends on the implementation.

// Example 1
let arr = [1, 4, 2, 3];
arr.sort();
console.log(arr); // [1, 2, 3, 4]

// Example 2
arr = [1, 4, 2, 3];
arr.sort((a, b) => a - b);
console.log(arr); // [1, 2, 3, 4]

// Example 3
arr = [1, 4, 2, 3];
arr.sort((a, b) => b - a);
console.log(arr); // [4, 3, 2, 1]

// Example 4
arr = [1, 4, 2, 3];
arr.sort((a, b) => Math.random() - 0.5);
console.log(arr); // [2, 3, 1, 4]

// Example 5
arr = ['c', 'a', 'b', 'd'];
arr.sort();
console.log(arr); // ['a', 'b', 'c', 'd']

// Example 6
arr = ['c', 'a', 'b', 'd'];
arr.sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0));
console.log(arr); // ['a', 'b', 'c', 'd']

// Example 7
arr = ['c', 'a', 'b', 'd'];
arr.sort((a, b) => b.charCodeAt(0) - a.charCodeAt(0));
console.log(arr); // ['d', 'c', 'b', 'a']

// Example 8
arr = ['c', 'a', 'b', 'd'];
arr.sort((a, b) => Math.random() - 0.5);
console.log(arr); // ['b', 'a', 'c', 'd']

// create array of object with product with  reandom sequence and sort it by price
// and year with months

// Example 9
let products = [
    { name: 'Laptop', price: 1000, year: 2019, month: 1 },
    { name: 'Mobile', price: 500, year: 2020, month: 2 },
    { name: 'Tablet', price: 300, year: 2018, month: 3 },
    { name: 'Watch', price: 100, year: 2017, month: 4 }
];
products.sort((a, b) => a.price - b.price);
console.log(products);

products.sort((a, b) => a.year - b.year);
console.log(products);

products.sort((a, b) => a.month - b.month);
console.log(products);

// Example 10
products.sort((a, b) => Math.random() - 0.5);

console.log(products);