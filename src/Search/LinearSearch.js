// Linear Search O(N)

const list = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    
function linearSearch(list, key) {
    for (let i = 0; i < list.length; i++) {
        if (list[i] === key) { return i }
    }
    return -1
}

linearSearch(list, 1)  // 0
linearSearch(list, 6)  // 5
linearSearch(list, 10) // -1
