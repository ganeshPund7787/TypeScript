interface User {
  readonly dbId: number;
  email: string;
  userId: number;
  GoogleId?: number;
  //   trialStart: () => string;
  trialStart(): string;
  getCoupon(coupenname: string, value: number): string;
}

const newUser: User = {
  dbId: 123,
  email: "ganu@gmail.com",
  userId: 3434,
  trialStart: () => {
    return "trial start";
  },
  getCoupon: (name: "ganesh", off: 34) => {
    return "200 ok";
  },
};
