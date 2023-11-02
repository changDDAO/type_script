type Properties = 'propA'|'propB';
type MyMappedType = {
    [P in Properties]: boolean;
}

interface Person{
    name: string;
    age: number;
    address: string;
}

const person:Person ={
    name: "John",
    age: 25,
    address: "123 Main St"
}
const age = getProperty(person, 'age');
const name1 = getProperty(person, 'name');

function getProperty<T, K extends keyof T>(obj: T, key: K){
    return obj[key];
}
console.log(name1);