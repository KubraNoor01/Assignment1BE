const express=require('express');
const app=express();
const port=4000;
const idsNext=1;

app.use(express.json())
const books = [ 
    {name: 'Inheritance of Loss', author: 'Kiran Desai', genre: 'history'},
    {name: 'A Bad Woman\'s Story', author: 'Durdana Sumoro', genre: 'novel'},
    {name: 'Evil Women', author: 'Deadlier Than the Male by John Marlowe', genre: 'novel'},
];


//create: Add new book
app.post('/create',(req,res)=>{
const {newBook,idsNext}=req.body;
books.push(newBook,idsNext);
idsNext++;
res.json({book:books})
})

//read: display all the books

app.get('/read',(req,res)=>{
    res.json({Allbooks:books})
})

//update: introduce changes in the already exsisting books

//listening: port
app.listen(port,()=>{
    console.log("listening port 4000");
})