const os = require("os");

// methods of os module
const user = os.userInfo();
console.log(user);

const upTime = os.uptime();
console.log(`The Uptime is ${upTime} seconds`);

const currentOs = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};
console.log(currentOs);
