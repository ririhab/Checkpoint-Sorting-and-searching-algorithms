function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
  return arr;
}
// example
let arr = [5, 7, 9, 1, 3];
// display demo 
document.getElementById("original").textContent = arr.join(", ");
let sortedArr = insertionSort([...arr]);
document.getElementById("sorted").textContent = sortedArr.join(", ");
