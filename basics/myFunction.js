"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 5;
    //   return "helllo";
}
addTwo(5);
function toUpper(val) {
    return val.toUpperCase();
}
toUpper("Ganesh");
function SignUpUser(name, email, isPass, fee) {
    return;
}
SignUpUser("Ganesh Pund", "ganu@gmail.com", true, 12);
function loginUser(name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
    return;
}
loginUser("ganu", "ganu@gmail.com");
// This situation alsoi happened
// function getValue(val: number): boolean | string {
//   if (val > 5) {
//     return true;
//   }
//   return "ok";
// }
var getHello = function (val) {
    return "";
};
var names = ["Ganesh", "Pratik", "Prashant", "vishal"];
// const names = [1, 2, 3, 4];
names.map(function (name) {
    return "My name is ".concat(name);
});
function consoleError(errMsg) {
    console.log(errMsg);
    return; // we can add only return
}
// we can't add return anymore : never
function handleError(errMsg) {
    throw new Error(errMsg);
}
