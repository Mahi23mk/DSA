function LongestSubstringAtMostKDistinctChar(s, k) {
    let left = 0;
    let right = 0;
    let map = {};
    let maxLength = 0;

    while (right < s.length) {
        map[s[right]] = (map[s[right]] || 0) + 1;

        // Shrink window until we have at most k distinct characters
        while (Object.keys(map).length > k) {
            map[s[left]]--;
            if (map[s[left]] === 0) {
                delete map[s[left]];
            }
            left++;
        }

        maxLength = Math.max(maxLength, right - left + 1);
        right++;
    }

    return maxLength;
}
