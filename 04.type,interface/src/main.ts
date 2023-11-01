/* interface getLikeNumber {
(like:number):number;
}
interface Post{
    id: number;
    title: string;
    getLikeNumber: getLikeNumber;
}
const post1: Post ={
    id: 1,
    title: 'post1',
    getLikeNumber(like:number){
        return like;
    }
} */
interface Post{
    id: number;
    title: string;
    [key: string]: unknown;
}
const post1: Post = {
    id: 1,
    title: 'post1',
}
post1['description'] = 'description1';
interface Names{
    [key: number]: string;
}

const userNames =['John','Kim','Youn']
userNames[0]==='John'
