// search techniques in javascript
// 1. linear search
// 2. binary search

// searching
// 1. linear search

// Example 1
let arr1 = [1, 2, 3, 4];
let search = 3;
let found = false;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === search) {
        found = true;
        break;
    }
}
console.log(found); // true

// Example 2
arr = [1, 2, 3, 4];
search = 5;
found = false;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === search) {
        found = true;
        break;
    }
}
console.log(found); // false

// 2.binary search
// binary search is faster than linear search
// but it only works on sorted array

// Example 3
arr = [1, 2, 3, 4];
search = 3;
let start = 0;
let end = arr.length - 1;
found = false;
while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === search) {
        found = true;
        break;
    } else if (arr[mid] < search) {
        start = mid + 1;
    } else {
        end = mid - 1;
    }
}
console.log(found); // true

// Example 4
arr = [1, 2, 3, 4];
search = 5;
start = 0;
end = arr.length - 1;
found = false;
while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === search) {
        found = true;
        break;
    } else if (arr[mid] < search) {
        start = mid + 1;
    } else {
        end = mid - 1;
    }
}
console.log(found); // false

// types for search in array and object in products array
// 1. indexOf - search in array and string name, price, year, month
// 2. find - search in array of object
// 3. findIndex - search in array of object
// 4. includes - search in array and string name, price, year, month
// 5. some - search in array of object
// 6. every - search in array of object
// 7. filter - search in array of object

// Example 1
let arr = [1, 2, 3, 4];
console.log(arr.indexOf(3)); // 2
console.log(arr.indexOf(5)); // -1
console.log(arr.indexOf(1, 2)); // -1

// Example 2
let str = 'Hello World';
console.log(str.indexOf('o')); // 4
console.log(str.indexOf('o', 5)); // 7

// Example 3
let products = [
    { name: 'Laptop', price: 1000, year: 2019, month: 1 },
    { name: 'Mobile', price: 500, year: 2020, month: 2 },
    { name: 'Tablet', price: 300, year: 2018, month: 3 },
    { name: 'Watch', price: 100, year: 2017, month: 4 }
];
console.log(products.indexOf({ name: 'Mobile', price: 500, year: 2020, month: 2 })); // -1

// Example 4
console.log(products.findIndex(product => product.price === 500)); // 1
console.log(products.findIndex(product => product.price === 100)); // 3
console.log(products.findIndex(product => product.price === 200)); // -1

// Example 5
console.log(products.find(product => product.price === 500)); // { name: 'Mobile', price: 500, year: 2020, month: 2 }
console.log(products.find(product => product.price === 100)); // { name: 'Watch', price: 100, year: 2017, month: 4 }
console.log(products.find(product => product.price === 200)); // undefined

// Example 6
console.log(products.includes('Mobile')); // false
console.log(products.includes('Laptop')); // false
console.log(products.includes('Tablet')); // false
console.log(products.includes('Watch')); // false
console.log(products.includes('Laptop', 1)); // false
console.log(products.includes('Mobile', 1)); // true
console.log(products.includes('Tablet', 1)); // true
console.log(products.includes('Watch', 1)); // true

// Example 7
console.log(products.some(product => product.price === 500)); // true
console.log(products.some(product => product.price === 100)); // true
console.log(products.some(product => product.price === 200)); // false

// Example 8
console.log(products.every(product => product.price > 100)); // false
console.log(products.every(product => product.price > 0)); // true

// Example 9
console.log(products.filter(product => product.price > 100)); // [ { name: 'Laptop', price: 1000, year: 2019, month: 1 }, { name: 'Mobile', price: 500, year: 2020, month: 2 } ]
console.log(products.filter(product => product.price > 1000)); // []
console.log(products.filter(product => product.price > 500)); // [ { name: 'Laptop', price: 1000, year: 2019, month: 1 } ]
console.log(products.filter(product => product.price > 1000 && product.year > 2019)); // []
console.log(products.filter(product => product.price > 500 && product.year > 2019)); // []
console.log(products.filter(product => product.price > 500 && product.year > 2018)); // [ { name: 'Laptop', price: 1000, year: 2019, month: 1 } ]
console.log(products.filter(product => product.price > 500 && product.year > 2018 && product.month > 1)); // [ { name: 'Laptop', price: 1000, year: 2019, month: 1 } ]
console.log(products.filter(product => product.price > 500 && product.year > 2018 && product.month > 2)); // []

// Example 10
console.log(products.filter(product => product.name === 'Mobile')); // [ { name: 'Mobile', price: 500, year: 2020, month: 2 } ]
console.log(products.filter(product => product.name === 'Laptop')); // [ { name: 'Laptop', price: 1000, year: 2019, month: 1 } ]
console.log(products.filter(product => product.name === 'Tablet')); // [ { name: 'Tablet', price: 300, year: 2018, month: 3 } ]
console.log(products.filter(product => product.name === 'Watch')); // [ { name: 'Watch', price: 100, year: 2017, month: 4 } ]
console.log(products.filter(product => product.name === 'Laptop' && product.price === 1000)); // [ { name: 'Laptop', price: 1000, year: 2019, month: 1 } ]
console.log(products.filter(product => product.name === 'Mobile' && product.price === 500)); // [ { name: 'Mobile', price: 500, year: 2020, month: 2 } ]
console.log(products.filter(product => product.name === 'Tablet' && product.price === 300)); // [ { name: 'Tablet', price: 300, year: 2018, month: 3 } ]

// Example 11
console.log(products.filter(product => product.name.includes('M'))); // [ { name: 'Mobile', price: 500, year: 2020, month: 2 } ]
console.log(products.filter(product => product.name.includes('L'))); // [ { name: 'Laptop', price: 1000, year: 2019, month: 1 } ]

// Example 12
console.log(products.filter(product => product.name.includes('M') && product.price > 500)); // []
console.log(products.filter(product => product.name.includes('M') && product.price > 100)); // [ { name: 'Mobile', price: 500, year: 2020, month: 2 } ]
console.log(products.filter(product => product.name.includes('M') && product.price > 100 && product.year > 2019)); // [ { name: 'Mobile', price: 500, year: 2020, month: 2 } ]