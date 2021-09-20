import { v4 as uuid } from 'uuid';

//initial values for Employees

let users = [
  {
    id: 1,
    username: 'Jin Woo Park',
    email: 'jpar303@gmail.com',
    password: '123',
  },
  {
    id: 2,
    username: 'Yunica',
    age: 25,
    email: 'test@test.com',
    password: '231',
  },
  {
    id: 3,
    username: 'Sophia',
    age: 23,
    email: 'test123@test.com',
    password: '777',
  },
];

//Get Method
export const getUsers = (req, res) => {
  console.log(`Users in the database: ${users}`);

  res.send(users);
};

// Post Method
export const createUser = (req, res) => {
  try {
    console.log('HAHA posted');
    const user = req.body;

    users.push({ ...user, id: uuid() });

    console.log(`User [${user.username}] added to the database.`);

    res.send('Created a user');
  } catch (error) {
    console.log('The error on creation: ', error);
  }
};

// get a single user
export const getUser = (req, res) => {
  try {
    const { id } = req.params;

    const foundUser = users.find((user) => user.id == id);

    let user = [];

    if (foundUser == undefined) {
      res.status(400);
      res.send('Found no one');
    } else {
      user.push(foundUser);
      res.send(user);
    }
  } catch (error) {
    console.log('The error', error);
  }
};

// delete method
export const deleteUser = (req, res) => {
  try {
    console.log(`user with id ${req.params.id} has been deleted`);

    users = users.filter((user) => user.id != req.params.id);

    res.send(`deleted the user with id ${req.params.id}`);
  } catch (error) {
    console.log('an error on Delete: ', error);
  }
};

//patch method
export const updateUser = (req, res) => {
  try {
    console.log('updated');
    let user = users.find((user) => user.id == req.params.id);

    user.username = req.body?.username;

    res.send(`The user ID ${req.params.id} is now updated`);
  } catch (error) {
    console.log('an error on update : ', error);
  }
};
