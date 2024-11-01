const express = require('express');
const app = express();
const port = 3000;

const books = [
    { name: 'Inheritance of Loss', author: 'Kiran Desai', genre: 'history', id: 1 },
    { name: 'A Bad Woman\'s Story', author: 'Durdana Sumoro', genre: 'novel', id: 2 },
    { name: 'Evil Women', author: 'Deadlier Than the Male by John Marlowe', genre: 'novel', id: 3 },
];


app.use(express.json());

// Create: Add a new book
app.post('/add', (req, res) => {
    const newBook = {
        name: "Middle in the East",
        author: "Assumption",
        genre: 'unknown',
        id: books.length + 1
    };
    books.push(newBook);
    res.status(201).send('Book has been added successfully');
});

// Read: Retrieve the list of all books
app.get('/retrieve', (req, res) => {
    res.status(200).json({ message: 'list of books:', books });
});

// Delete: Manually remove a book by ID
app.delete('/delete/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    const bookIndex = books.findIndex(book => book.id === id);

    if (bookIndex !== -1) {
        books.splice(bookIndex, 1);
        res.status(200).send('Book has been deleted successfully');
    } else {
        res.status(404).send('Book not found');
    }
});

// Update: Update a book's details (just a message for now)
app.put('/update/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    const bookToFind = books.find(book => book.id === id);

    if (bookToFind) {
        res.status(200).send('Book has been updated successfully');
    } else {
        res.status(404).send('Book not found');
    }
});

//handeling the unknow routes 
app.use((req, res) => {
    res.status(404).send('Route not found');
});

app.listen(port, () => {
    console.log("server is listening the port 3000");
});
