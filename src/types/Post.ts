export default interface Post {
    content: String;
    createdOn: {
        nanoseconds: number;
        seconds: number;
    };
    short: String,
    gitLink: String,
    img: String,
    id: String;
    userId: String;
    userName: String;
}