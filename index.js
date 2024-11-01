const http = require('http');

const books = [ 
    {name: 'Inheritance of Loss', author: 'Kiran Desai', genre: 'history', id: 1},
    {name: 'A Bad Woman\'s Story', author: 'Durdana Sumoro', genre: 'novel', id: 2},
    {name: 'Evil Women', author: 'Deadlier Than the Male by John Marlowe', genre: 'novel', id: 3},
];

const server = http.createServer((req, res) => {
    // Create: Add a new book
    if (req.method === 'POST' && req.url === '/add') {
        const newBook = {
            name: "Middle in the East",
            author: "Assumption",
            genre: 'unknown',
            id: books.length + 1
        };

        books.push(newBook);
        res.end(JSON.stringify({ message: 'Book added successfully', books }));
    }

    // Read: Retrieve the list of all books
    if (req.method === 'GET' && req.url === '/retrieve') {
        res.end(JSON.stringify(books));
    }

    // Delete: Manually remove a book
    if (req.method === 'GET' && req.url === '/delete') {
        function deleteBookById(id) {
            const updatedBooks = books.filter(book => book.id !== id);
            return updatedBooks; 
        }
        const updatedBooks = deleteBookById(2); 
        console.log(updatedBooks);
        res.end(JSON.stringify( updatedBooks ));
    } else {
        res.end(JSON.stringify({ message: 'Route not found' }));
    }
});

const port = 3000; 
server.listen(port, () => {
    console.log('listening the prt 3000');
});


// if (req.method === 'PUT' && req.url === '/update') {
//     if (!BookToFind) {
//         return res.end("Book not found");
//     }
//     
// }
