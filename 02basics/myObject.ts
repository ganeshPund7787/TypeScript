const User = {
  name: "Ganesh",
  email: "ganu@gmail.com",
  isPaid: false,
};

function createUser({ name: string, isPaid: boolean }): object {
  return {};
}

createUser({ name: "Ganesh", isPaid: false });

function createCourse(): { name: string; price: number } {
  return { name: "typescript", price: 1 };
}

// wrong behavier in ts

function setData({ id: string, price: number }) {}

const newData = { id: "324rf4tf452r", price: 2323, login: false };

setData(newData);

//
//
//
//
// aliases in typescript
///

type User = {
  name: string;
  gender: string;
  mo_no: number;
};

function createUsers(user: User): User {
  return { name: "string", gender: "string", mo_no: 24546 };
}

createUsers({ name: "string", gender: "string", mo_no: 24546 });

export {};
