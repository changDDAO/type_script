interface Address{
    email: string;
    address: string;
}

const me = {};
const you: Partial<Address> = {email: "younch8342@naver.com"};
const all: Address ={email: "younch8342@naver.com", address: "Seoul"};

interface Todo{
    title: string;
    description: string;
    completed: boolean;
}

type TodoPicked = Pick<Todo, "title" | "completed">;
const todo: TodoPicked = {
    title: "title",
    completed: true
}
interface CatInfo{
    age: number;
    breed: string;
}
type CatName = "miffy" | "boris" | "mordered";


const cats: Record<CatName, CatInfo> = {
    miffy: { age: 10, breed: "persian" },
    boris: { age: 11, breed: "maine coon" },
    mordered: { age: 12, breed: "british shorthair"}
}

