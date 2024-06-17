let name: number | string = 222;

name = "Ganu";

type User = {
  name: string;
  id: number;
};

type admin = {
  username: string;
  id: number;
};

let ganesh: User | admin = { name: "ganu", id: 512 };

ganesh = { username: "Ganesh", id: 512 };

function getDbId(id: number | string) {
  console.log(`Dbid is ${id}`);
}

getDbId(23);
getDbId("dsf423df");

function getUserId(id: string | number) {
  if (typeof id === "string") {
    id.toLowerCase();
  } else {
    id.toFixed();
  }
}

// Array

const data: number[] = [1, 2, 3, 4, 5];
const data2: string[] = ["1", "2", "3", " 4", "5"];
const data3: string[] | number[] = ["1", "2", "3", " 4", "5"];
const data4: (string | number | boolean)[] = ["1", "2", "3", 5, true];

let seatAllotment: "asile" | "middle" | "window";

seatAllotment = "asile";
// seatAllotment = "end"

//if you want to declare constant value
const pi: 3.14 = 3.14;

export {};
