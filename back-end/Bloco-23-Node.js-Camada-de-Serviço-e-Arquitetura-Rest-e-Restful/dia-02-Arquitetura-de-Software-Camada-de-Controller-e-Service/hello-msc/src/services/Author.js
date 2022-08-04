const Author = require('../models/Author');

const getNewAuthor = (authorData) => {
  const { id, firstName, middleName, lastName } = authorData;

  const fullName = [firstName, middleName, lastName]
    .filter((name) => name)
    .join(' ');

  return {
    id,
    firstName,
    middleName,
    lastName,
    name: fullName,
  };
};

const isValid = (firstName, middleName, lastName) => {
  if (!firstName || typeof firstName !== 'string') return false;
  if (!lastName || typeof lastName !== 'string') return false;
  if (middleName && typeof middleName !== 'string') return false;
};

const getAllAuthors = async () => {
  const authors = await Author.getAll();

  return authors;
};

const findId = async (id) => {
  const authorsData = await Author.findId(id);

  return authorsData;
};

const createAuthor = async (firstName, middleName, lastName) => {
  const validAuthor = isValid(firstName, middleName, lastName);

  if (!validAuthor) return false;

  await Author.createAuthor(firstName, middleName, lastName);

  return getNewAuthor({
    id: Author.id,
    firstName,
    middleName,
    lastName,
  });
};

module.exports = {
  findId,
  createAuthor,
  getAllAuthors,
};
