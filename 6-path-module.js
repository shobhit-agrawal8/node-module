const path = require("path");

// some methods of path module
console.log(path.sep);
// path.sep provide us the seperator details which is "/"
const filePath = path.join("content", "subfolder", "test.txt");
console.log(filePath);

const base = path.basename(filePath);
console.log(base);

const absoulte = path.resolve(__dirname, "content", "subfolder", "test.txt");
console.log(absoulte);
