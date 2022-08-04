const express = require('express');
const bodyParser = require('body-parser');
const Author = require('./controllers/Author');

const Books = require('./models/Books');

const app = express();
app.use(bodyParser.json());

app.get('/authors', Author.getAll);

app.get('/authors/:id', Author.findById);

app.post('/authors', Author.createAuthor);

app.get('/books', async (_req, res) => {
  const books = await Books.getAllBooks();

  res.status(200).json(books);
});

app.get('/books/:id', async (req, res) => {
  const { id } = req.params;
  const book = await Books.findIdBooks(id);

  if (!book) return res.status(404).json({ message: 'Not found' });

  res.status(200).json(book);
});

app.post('/books', async (req, res) => {
  const { title, author_id } = req.body;

  if (!Books.isValidBook(title, author_id))
    return res.status(400).json({ message: 'Dados inválidos' });

  await Books.createBooks(title, author_id);

  res.status(201).json({ message: 'Livro criado com sucesso!' });
});

app.listen(3000, () => {
  console.log('To rodando lisinho na porta 3000');
});
