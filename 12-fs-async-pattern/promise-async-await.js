// util will work similar as promise which is written below
// this util can be work under only node js
// otherwise this should be done using
// promise async-await or callbacks function

const { readFile, writeFile } = require("fs").promises;
// const util = require("util");
// const readFilePromise = util.promisify(fs.readFile);
// const writeFilePromise = util.promisify(fs.writeFile);

// my add .promise in require we can also ignore util module
const start = async () => {
  try {
    const first = await readFile("../content/first.txt", "utf8");
    const second = await readFile("../content/second.txt", "utf8");
    await writeFile("../content/fourth.txt", `This is fourth file ${first} ${second}`);
    console.log(first);
    console.log(second);
  } catch (error) {
    console.log(error);
  }
};

start();

// using promise
// const getText = (path) => new Promise((resolve, reject) => {
//   fs.readFile(path, "utf8", (err, data) => {
//     if (err) {
//       reject(err);
//     } else {
//       resolve(data);
//     }
//   });
// });

// getText("./content/first.txt")
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));
