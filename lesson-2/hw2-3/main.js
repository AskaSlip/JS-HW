// – Створити 3 об’єкти, які описують книги. Поля об’єкту : title ,pageCount, genre, authors.
// Поле “автори” – являється  масивом.
// Кожен автор має поля name та age.

let book1 = {
    title: '1984',
    pageCount: 328,
    genre: 'Dystopian',
    authors: [
        { name: 'George Orwell', age: 46 },
        { name: 'Author Two', age: 50 }
    ]
}
let book2 = {
    title: 'To Kill a Mockingbird',
    pageCount: 281,
    genre: 'Fiction',
    authors: [
        { name: 'Harper Lee', age: 89 },
        { name: 'Author Two', age: 55 },
        { name: 'Author Three', age: 60 }
    ]
}
let book3 = {
    title: 'The Great Gatsby',
    pageCount: 180,
    genre: 'Classic',
    authors: [
        { name: 'F. Scott Fitzgerald', age: 44 },
        { name: 'Author Two', age: 70 },
    ]
}

console.log(book1, book2, book3);