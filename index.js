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

