const names = require("./3.1-name");
const sayHi = require("./3.2 func");

sayHi("Shobhit");
sayHi(names.john);
sayHi(names.peter);

// mind grenade means if we are export a module having function invoked in it
// it will be called when importing it without assigning it in a variable
// importing a module means automatically invoking it
require("./4-mind-grenade");
