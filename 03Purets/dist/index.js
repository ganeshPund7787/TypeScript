"use strict";
class User {
    email;
    name;
    city = "shevgaon";
    constructor(email, name) {
        this.email = email;
        this.name = name;
    }
}
class User2 {
    email;
    name;
    city = "shevgaon";
    constructor(email, name // private userId: string
    ) {
        this.email = email;
        this.name = name;
    }
}
const ganesh = new User("ganu@gmail.com", "ganesh");
