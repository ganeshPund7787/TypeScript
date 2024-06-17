// Type narrowing
function detectVal(val) {
    if (typeof val === "string") {
        return val.toLocaleLowerCase();
    }
    return val.toFixed();
}
function provideId(id) {
    if (!id) {
        console.log("Please provide valid id");
        return;
    }
    return id.toLocaleLowerCase();
}
function printAll(strs) {
    if (strs) {
        if (typeof strs === "object") {
            for (var _i = 0, strs_1 = strs; _i < strs_1.length; _i++) {
                var s = strs_1[_i];
                console.log(s);
            }
        }
        else if (typeof strs === "string") {
            console.log(strs);
        }
    }
}
//
// // instanceOf
// Any Data Type or objet's which are create using new theire we use instanceof
function logValue(x) {
    if (x instanceof Date) {
        console.log(x.toUTCString());
    }
    else {
        console.log(x.toUpperCase());
    }
}
function isFish(pet) {
    return pet.swim !== undefined;
}
function getFood(pet) {
    if (isFish(pet)) {
        pet;
        return "Fish food";
    }
    else {
        pet;
        return "Bird food";
    }
}
function getTrueShape(shape) {
    if (shape.kind === "circle") {
        return Math.PI * Math.pow(shape.radius, 2);
    }
    // return shape.side * shape.side;
}
function getTrueArea(shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * Math.pow(shape.radius, 2);
        case "square":
            return shape.side * shape.side;
        case "rectangle":
            return shape.length * shape.width;
        default:
            var _defaultForShape = shape;
            return _defaultForShape;
    }
}
