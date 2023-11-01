interface IUser{
    name: string;
    age: number;
    address: string;
}
type UserKeys = keyof IUser;

const user = {
    name: "younch8342",
    age: 20,
    address: "Seoul"
}
type UserKeys2 = keyof typeof user;