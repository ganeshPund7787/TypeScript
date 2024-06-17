class User {
  public email: string;
  private name: string;
  readonly city: string = "shevgaon";
  constructor(email: string, name: string) {
    this.email = email;
    this.name = name;
  }
}

// getter & setter in ts

class User2 {
  protected _courseCount = 1;
  readonly city: string = "shevgaon";

  constructor(public email: string, public name: string) {}

  private deleteToken() {
    console.log("Token deleted");
  }

  get getAppleEmail(): string {
    return `apple ${this.email}`;
  }

  get courseCount(): number {
    return this._courseCount;
  }

  set courseCount(courseNum) {
    if (courseNum <= 1) {
      throw new Error("Course count must be more than 1");
    }
    this._courseCount = courseNum;
  }
}

class subUser extends User2 {
  isFamily: boolean = true;
  changeCourseCount() {
    this._courseCount = 4;
  }
}

const ganesh = new User("ganu@gmail.com", "ganesh");
