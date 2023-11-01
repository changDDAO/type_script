const makeFullName = <T extends {firstName: string, lastName: string}>(obj: T)=> {
return {
   ...obj,
   fullName: `${obj.firstName} ${obj.lastName}`
}
}
console.log(makeFullName({firstName: "youn", lastName: "changho", location: "Seoul"}));
