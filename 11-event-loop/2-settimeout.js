console.log("First Task");
setTimeout(() => {
  console.log("Second Task");
  setTimeout(() => {
    console.log("Second Half Task");
  }, 0);
}, 0);
console.log("Third Task");
