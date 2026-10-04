/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    if (s.length !== t.length) return false;
    const counts = {};
    for (const char of s) {
        counts[char] = (counts[char] || 0) + 1;
    }
    for (const char of t) {
        if (!counts[char]) return false;
        counts[char] = counts[char] - 1
    }
    return true

};