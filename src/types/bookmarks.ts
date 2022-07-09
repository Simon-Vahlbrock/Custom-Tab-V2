export interface Bookmark {
    folderName: string;
    books: Book[]
}

export interface Book {
    name: string;
    link: string;
}