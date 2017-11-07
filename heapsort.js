const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var arrLen;
function buildHeap(arr) {
    arrLen = arr.length;
    for (let i = Math.floor(arrLen / 2); i >= 0; i -= 1) {
        heapify(arr, i);
    }
}
function heapify(arr, i) {
    let l = (i * 2) + 1;
    let r = (i * 2) + 2;
    let max = i;
    if (l < arrLen && arr[max] < arr[l]) {
        max = l;
    }
    if (r < arrLen && arr[max] < arr[r]) {
        max = r;
    }
    if (max != i) {
        swap(arr, i, max);
        heapify(arr, max);
    }
}
function swap(arr, a, b) {
    let tmp = arr[a];
    arr[a] = arr[b];
    arr[b] = tmp;
}
function heapsort(arr) {
    buildHeap(arr);
    for (let i = arr.length - 1; i > 0; i--) {
        swap(arr, 0, i);
        arrLen--;
        heapify(arr, 0);
    }
}
let arr = [];
let count = 0;
console.log("Enter 10 numbers one by one :");
rl.on('line', function (input) {
    if (count != 10) {
        arr.push(parseInt(input));
        count++;
    }
    if (count == 10) {
        console.log("\nSorted heap in descending order:\n");
        heapsort(arr);
        arr.reverse();
        for (let i = 0; i < count; i++) {
            console.log(arr[i]);
        }
        rl.close();
    }
    if (isNaN(input)) {
        throw ("Invalid input - Enter only numbers !");
    }
});
