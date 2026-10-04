function topKFrequent(nums: number[], k: number): number[] {
    const counts: Record<string, number> = {}

    for (const n of nums) {
        counts[n] = (counts[n] || 0) + 1
    }

    return Object.keys(counts).sort((a, b) => counts[Number(b)] - counts[Number(a)]).slice(0, k).map(Number)


};
