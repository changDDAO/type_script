class Post{
    public id: number =0;
    public title: string="";
    constructor(id: number, title: string){
        this.id = id;
        this.title = title;
    }

    getPost(): string{
        return `id: ${this.id}, title: ${this.title}`;
    }
}

const post1: Post = new Post(1, "title1");
console.log(post1.id);
console.log(post1.title);