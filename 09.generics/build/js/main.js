"use strict";
/*  function getArrayLength(arr: number[]|string[]): number{
    return arr.length;
 } */
function getArrayLength(arr) {
    return arr.length;
}
const arr = [1, 2, 3, 4, 5, 6];
const strArr = ['1', '2', '3', '4', '5', '6'];
console.log(getArrayLength(arr));
console.log(getArrayLength(strArr));
const car = {
    name: 'Audi',
    color: 'Blue',
    option: {
        price: 1000
    }
};
