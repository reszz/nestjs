export interface Publisher {
    id: number;
    name: string;
}

export interface Author {
    id: number;
    name: string;
}

export interface Book {
    id: number;
    title: string;
    isbn: string;
    publishedDate: Date;
    price: number;
    author: Author;
    publisher: Publisher;
    genre: string[];
}