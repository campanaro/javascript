// Binary Search O(1)

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const strings = ['Apples', 'Bananas', 'Mangoes', 'Oranges', 'Tomatoes', 'Watermelons']

function binarySearch(sortedList, key){
    let start = 0
    let end = sortedList.length - 1

    while (start <= end) {
        let middle = Math.floor((start + end) / 2)

        if (sortedList[middle] === key) {
            return middle
        } else if (sortedList[middle] < key) {
            start = middle + 1
        } else {
            end = middle - 1
        }
    }
    return -1
}

binarySearch(numbers, 5) // 4
binarySearch(numbers, 2) // 2
binarySearch(numbers, 9) // 8

binarySearch(strings, 'Mangoes')  // 2
binarySearch(strings, 'Tomatoes') // 4
binarySearch(strings, 'Apples')   // 0
