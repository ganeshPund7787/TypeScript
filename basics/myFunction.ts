function addTwo(num: number): number {
  return num + 5;
  //   return "helllo";
}

addTwo(5);

function toUpper(val: string) {
  return val.toUpperCase();
}

toUpper("Ganesh");

function SignUpUser(name: string, email: string, isPass: boolean, fee: number) {
  return;
}

SignUpUser("Ganesh Pund", "ganu@gmail.com", true, 12);

function loginUser(name: string, email: string, isPaid: boolean = false) {
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

let getHello = (val: number): string => {
  return "";
};

const names = ["Ganesh", "Pratik", "Prashant", "vishal"];
// const names = [1, 2, 3, 4];

names.map((name): string => {
  return `My name is ${name}`;
});

function consoleError(errMsg: string): void {
  console.log(errMsg);
  return; // we can add only return
}

// we can't add return anymore using : never
function handleError(errMsg: string): never {
  throw new Error(errMsg);
}

export {};
