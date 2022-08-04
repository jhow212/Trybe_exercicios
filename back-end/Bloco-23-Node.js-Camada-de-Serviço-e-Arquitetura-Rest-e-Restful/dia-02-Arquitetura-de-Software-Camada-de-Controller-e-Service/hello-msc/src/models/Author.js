const db = require('./connections');

// const serialize = (authorData) => ({
//   id: authorData.id,
//   firstName: authorData.first_name,
//   middleName: authorData.middle_name,
//   lastName: authorData.last_name,
// });

const getAll = async () => {
  const [authors] = await db.execute(
    'SELECT id, first_name AS firstName, middle_name AS middleName, last_name AS lastName FROM model_example.authors'
  );

  if (authors === undefined) return null;

  return authors;
};

const findId = async (id) => {
  const [[authorData]] = await db.execute(
    'SELECT id, first_name AS firstName, middle_name AS middleName, last_name AS lastName FROM model_example.authors WHERE id=?',
    [id]
  );

  if (authorData === null) return null;

  return authorData;
};

const createAuthor = async (firstName, middleName, lastName) => {
  db.query(
    'INSERT INTO model_example.authors (first_name, middle_name, last_name) VALUES (?, ?, ?)',
    [firstName, middleName, lastName]
  );
};

module.exports = {
  getAll,
  findId,
  createAuthor,
};
