// let unordenedList = [1,2,3,4,5]

// // const ordenedList = mergeSort(unordenedList)s

// reverse(unordenedList)

// function reverse(arr) {
//     let leftIndex = 0
    
//     let rightIndex = arr.length - 1
    
//     while (leftIndex <= rightIndex) {
//         let leftIndexValue = arr[leftIndex]
//         let rightIndexValue = arr[rightIndex]
//         arr[leftIndex] = rightIndexValue
//         arr[rightIndex] = leftIndexValue
//         leftIndex++
//         rightIndex--
//     }

//     console.log(arr)
// }

// function mergeSort(arr) {
//     if (arr.length < 2) {
//         return arr
//     }

//     const middleIndex = Math.floor(arr.length / 2)
//     const letfArr = arr.slice(0, middleIndex)
//     const rightArr = arr.slice(middleIndex, arr.length)

//     return merge(mergeSort(letfArr), mergeSort(rightArr))
// }

// function merge(leftArr, rightArr) {
//     let resultArr = []
//     let leftIndex = 0
//     let rightIndex = 0

//     while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
//         if (leftArr[leftIndex] < rightArr[rightIndex]) {
//             resultArr.push(leftArr[leftIndex])
//             leftIndex += 1
//         } else {
//             resultArr.push(rightArr[rightIndex])
//             rightIndex += 1
//         }
//     }

//     return resultArr.concat(leftArr.slice(leftIndex)).concat(rightArr.slice(rightIndex))
// }

let a = null;
(a = (1 + 3, 3)), 1 + 7
console.log(a)
