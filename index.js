// Add all models
const db = require('./models');

// Create a user inside user table
db.user.create({
    firstName: 'Jim',
    lastName: 'Jones',
    age: 45
}).then(createdUser => {
    console.log(createdUser.get());
});

// Read from users table
db.user.findOne({
    where: { firstName: 'Rome' }
}).then(foundUser => {
    console.log(foundUser.get());
});

// Find all users
db.user.findAll().then(allUsers => {
    console.log(allUsers);
    console.log(allUsers[0].get());
});

// Update a user
db.user.update({
    lastName: 'Bobby'
}, {
    where: { firstName: 'Billy' }
}).then(numRowsChanged => {
    console.log(numRowsChanged);
});