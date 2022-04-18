function addUpTo (n) {
    let total = 0;
    for (let i = 0; i <= n; i++) total += i;
    console.log(`solution: ${total}`);
}
// 5n + 2 operations in total
// O(n)

const timeStart = new Date();
addUpTo(1000000);
const timeEnd = new Date();

console.log(`Performance time: ${(timeEnd - timeStart) / 1000} seconds`);