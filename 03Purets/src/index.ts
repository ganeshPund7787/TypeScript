class User {
  public email: string;
  private name: string;
  readonly city: string = "shevgaon";
  constructor(email: string, name: string) {
    this.email = email;
    this.name = name;
  }
}

class User2 {
  readonly city: string = "shevgaon";
  constructor(
    public email: string,
    public name: string // private userId: string
  ) {}
}

const ganesh = new User("ganu@gmail.com", "ganesh");
