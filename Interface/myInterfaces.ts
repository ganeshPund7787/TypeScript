interface User {
  readonly dbId: number;
  email: string;
  userId: number;
  GoogleId?: number;
  //   trialStart: () => string;
  trialStart(): string;
  getCoupon(coupenname: string, value: number): string;
}

interface User {
  gitHubToken: string;
}

interface admin extends User {
  role: "admin" | "ta" | "learner";
}

const newUser: admin = {
  dbId: 123,
  role: "admin",
  gitHubToken: "gitGub",
  email: "ganu@gmail.com",
  userId: 3434,
  trialStart: () => {
    return "trial start";
  },
  getCoupon: (name: "ganesh", off: 34) => {
    return "200 ok";
  },
};
