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

type id = number | string;

type mongoUser = {
  readonly _id: string;
  name: string;
  email: string;
  isActive: boolean;
  creaditCardNo?: number;
};

const newMongoser: mongoUser = {
  _id: "123241",
  name: "ganesh",
  email: "ganu@gmail.com",
  isActive: true,
};

newMongoser.name = "vishal";

// newMongoser._id = "sfsdf"

type cardNumber = {
  cardnumber: string;
};

type cardDate = {
  cardDate: string;
};

type cardDetails = cardNumber &
  cardDate & {
    cvv: number;
  };

const newCard: cardDetails = {
  cardnumber: "123",
  cardDate: "dfds",
  cvv: 3456,
};
export {};
