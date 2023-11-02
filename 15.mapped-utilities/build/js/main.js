"use strict";
const person = {
    name: "John",
    age: 25,
    address: "123 Main St"
};
const age = getProperty(person, 'age');
const name1 = getProperty(person, 'name');
function getProperty(obj, key) {
    return obj[key];
}
console.log(person, name1);
