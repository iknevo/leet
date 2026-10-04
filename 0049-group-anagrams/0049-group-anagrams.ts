function groupAnagrams(strs: string[]): string[][] {
    const counts = new Map<string, string[]>();

    for (const str of strs) {
        const count = Array(26).fill(0)
        for (const c of str) {
            count[c.charCodeAt(0) - 97]++
        }
        const key = count.join("$")
        if (!counts.has(key)) {
            counts.set(key, [])
        }
        counts.get(key)!.push(str)
    }
    return Array.from(counts.values())
};
