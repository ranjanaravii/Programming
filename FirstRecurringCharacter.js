function firstRecurringCharacter(arr) {
    let map = {};
    for (let i = 0; i < arr.length; i++) {
        if (map[arr[i]]) {
            return arr[i];
        } else {
            map[arr[i]] = 1;
        }
    }
    return -1;
}
console.log(firstRecurringCharacter([2, 5, 1, 2, 3, 5, 1, 2, 4])); // 2
console.log(firstRecurringCharacter([2, 1, 1, 2, 3, 5, 1, 2, 4])); // 1
console.log(firstRecurringCharacter([2, 3, 4, 5])); // -1
console.log(firstRecurringCharacter([2, 5, 5, 2, 3, 5, 1, 2, 4])); // 5