function removeDuplicates(arr) {
    const seen = {};
    const result = [];

    for (const item of arr) {
        if (!Object.hasOwn(seen, item)) {
            seen[item] = true;
            result.push(item);
        }
    }

    return result;
}

const arr = [1, 2, 2, 3, 4, 3, 5, 1];

console.log(removeDuplicates(arr));
// [1, 2, 3, 4, 5]
