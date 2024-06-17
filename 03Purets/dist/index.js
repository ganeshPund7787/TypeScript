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
    _courseCount = 1;
    city = "shevgaon";
    constructor(email, name) {
        this.email = email;
        this.name = name;
    }
    deleteToken() {
        console.log("Token deleted");
    }
    get getAppleEmail() {
        return `apple ${this.email}`;
    }
    get courseCount() {
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
    isFamily = true;
    changeCourseCount() {
        this._courseCount = 4;
    }
}
const ganesh = new User("ganu@gmail.com", "ganesh");
