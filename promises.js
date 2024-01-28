/* ============================== Phase 1 ============================== */
/* -------------------------- exploring async -------------------------- */

// Your code here
function num1() {
  return 1;
}

async function num2() {
  return 2;
}

// num2().then((result) => console.log(result));
/* ============================== Phase 2 ============================== */
/* -------------------------- exploring await -------------------------- */
async function waiting() {
  const number = await num2();
  console.log("waiting, ", number);
}
// waiting();
// Your code here

/* ============================== Phase 3 ============================== */
/* --------------------- creating a custom Promise --------------------- */
async function waitForPromise() {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      console.log("fuck");
    }, 1000);
  });
  const result = await promise;
  console.log(result);
}
// waitForPromise();
// Your code here

/* ============================== Phase 4 ============================== */
/* -------------------------- exploring then --------------------------- */
// const thing = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve("done");
//   }, 1000);
// }).then((result) => {
//   console.log(result);
// });
// Your code here

/* ============================== Phase 5 ============================== */
/* ------------------- turn setTimeout into a Promise ------------------ */
function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
// console.log("one");
// wait(1000).then(() => {
//   console.log("two");
// });
// Your code here

/* ============================== Phase 6 ============================== */
/* -------------------- exploring reject and .catch -------------------- */
const randomPromise = (random) =>
  new Promise((resolve, reject) => {
    random > 0.5 ? resolve("lit") : reject("no");
  }).catch("whatever");

console.log(await randomPromise(0));
console.log("end");
/* ============================== Phase 7 ============================== */
/* ---------------- exploring async/await and try/catch ---------------- */

// Your code here

/* ============================== Phase 8 ============================== */
/* -------------------- Promises are asynchronous! --------------------- */

// Your code here
