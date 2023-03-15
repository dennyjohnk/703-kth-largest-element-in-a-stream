const {
    MaxPriorityQueue,
} = require('@datastructures-js/priority-queue');

var lastStoneWeight = function (stones) {
    const maxHeap = getMaxHeap(stones);

    shrink(maxHeap);

    return !maxHeap.isEmpty() ? maxHeap.front().element : 0;
};

function getMaxHeap(stones, maxHeap = new MaxPriorityQueue()) {
    for (const stone of stones) {
        maxHeap.enqueue(stone)
    }
    return maxHeap;
}

function shrink(maxHeap) {
    while (maxHeap.size() > 1) {
        const [x, y] = [maxHeap.dequeue().element, maxHeap.dequeue().element];
        const difference = x - y;

        if (difference > 0) {
            maxHeap.enqueue(difference)
        }
    }
}

const stones = [2, 7, 4, 1, 8, 1];
const result = lastStoneWeight(stones);
console.log(result);