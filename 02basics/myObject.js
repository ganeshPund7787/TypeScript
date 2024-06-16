"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = {
    name: "Ganesh",
    email: "ganu@gmail.com",
    isPaid: false,
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
    return {};
}
createUser({ name: "Ganesh", isPaid: false });
function createCourse() {
    return { name: "typescript", price: 1 };
}
// wrong behavier in ts
function setData(_a) {
    var string = _a.id, number = _a.price;
}
var newData = { id: "324rf4tf452r", price: 2323, login: false };
setData(newData);
function createUsers(user) {
    return { name: "string", gender: "string", mo_no: 24546 };
}
createUsers({ name: "string", gender: "string", mo_no: 24546 });
var newMongoser = {
    _id: "123241",
    name: "ganesh",
    email: "ganu@gmail.com",
    isActive: true,
};
newMongoser.name = "vishal";
