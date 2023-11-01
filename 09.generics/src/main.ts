/*  function getArrayLength(arr: number[]|string[]): number{
    return arr.length;
 } */
    function getArrayLength<T>(arr: T[]): number{
        return arr.length;
    }
 const arr = [1, 2, 3, 4, 5, 6];
 const strArr = ['1', '2', '3', '4', '5', '6'];
 console.log(getArrayLength<number>(arr));
 console.log(getArrayLength<string>(strArr));

 interface Vehicle<T>{
    name: string;
    color: string;
    option: T;
 }
 const car: Vehicle<{price: number}> = {
    name: 'Audi',
    color: 'Blue',
    option: {
        price: 1000
    }
 }