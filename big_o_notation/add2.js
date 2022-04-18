function addUpTo (n) {
    const total = n * (n + 1) / 2;
    console.log(`solution: ${total}`);
}
// 3 operations in total
// O(1)

const timeStart = new Date();
addUpTo(1000000);
const timeEnd = new Date();

console.log(`Performance time: ${(timeEnd - timeStart) / 1000} seconds`);