"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var name = 222;
name = "Ganu";
var ganesh = { name: "ganu", id: 512 };
ganesh = { username: "Ganesh", id: 512 };
function getDbId(id) {
    console.log("Dbid is ".concat(id));
}
getDbId(23);
getDbId("dsf423df");
function getUserId(id) {
    if (typeof id === "string") {
        id.toLowerCase();
    }
    else {
        id.toFixed();
    }
}
// Array
var data = [1, 2, 3, 4, 5];
var data2 = ["1", "2", "3", " 4", "5"];
var data3 = ["1", "2", "3", " 4", "5"];
var data4 = ["1", "2", "3", 5, true];
var seatAllotment;
seatAllotment = "asile";
