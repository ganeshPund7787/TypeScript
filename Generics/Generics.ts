const score: Array<number> = [];
const nameArr: Array<string> = [];

function identityOne(val: boolean | number): boolean | number {
  return val;
}

function identityTwo(val: any): any {
  return val;
}

function identityThree<Type>(val: Type): Type {
  return val;
}

// identityThree("Ganu");

function identityFour<T>(val: T): T {
  return val;
}

interface bottle {
  brand: string;
  price: number;
}

// identityFour<bottle>();

function getSearchProducts<T>(product: T[]): T {
  // do some databse operation
  const myIdx = 3;
  return product[myIdx];
}

const getMoreSearchProducts = <T>(product: T[]): T => {
  // do some databse operation
  const myIdx = 3;
  return product[myIdx];
};

// Advanced generics

interface database {
  connection: string;
  username: string;
  password: string;
}

function anotherFunctio<T, U extends database>(valOne: T, valTwo: U): Object {
  return {
    valOne,
    valTwo,
  };
}

// anotherFunctio(23, {});

interface Quize {
  name: string;
  type: string;
}

interface Course {
  name: string;
  author: string;
  duration: string;
}

class syllabus<T> {
  public cart: T[] = [];

  addCard(product: T) {
    this.cart.push(product);
  }
}
