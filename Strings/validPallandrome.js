function isPalindrome(str) {
    let left = 0;
    let right = str.length - 1;

    while (left < right) {
        // Skip non-alphanumeric characters
        while (left < right && !isAlphaNumeric(str[left])) {
            left++;
        }

        while (left < right && !isAlphaNumeric(str[right])) {
            right--;
        }

        // Compare characters
        if (str[left].toLowerCase() !== str[right].toLowerCase()) {
            return false;
        }

        left++;
        right--;
    }

    return true;
}

function isAlphaNumeric(char) {
    return /[a-zA-Z0-9]/.test(char);
}

console.log(isPalindrome("A man, a plan, a canal: Panama"));
// true

console.log(isPalindrome("race a car"));
// false
