// // Add all models
const db = require('./models');

// // Create a user inside user table
// db.user.create({
//     firstName: 'Jim',
//     lastName: 'Jones',
//     age: 45
// }).then(createdUser => {
//     console.log(createdUser.get());
// });

// // Read from users table
// db.user.findOne({
//     where: { firstName: 'Rome' }
// }).then(foundUser => {
//     console.log(foundUser.get());
// });

// // Find all users
// db.user.findAll().then(allUsers => {
//     console.log(allUsers);
//     console.log(allUsers[0].get());
// });

// // Update a user
// db.user.update({
//     lastName: 'Bobby'
// }, {
//     where: { firstName: 'Billy' }
// }).then(numRowsChanged => {
//     console.log(numRowsChanged);
// });

// // Delete a user
// db.user.destroy({
//     where: { lastName: 'Bobby' }
// }).then(numRowsDeleted => {
//     console.log(numRowsDeleted);
// });

// db.user.create({
//     firstName: 'Jim',
//     lastName: 'Jones',
//     age: 45
// })

// db.user.findOne().then((foundUser) => {
//     // console.log(foundUser);
//     foundUser.createPet({
//         name: 'Violet',
//         species: 'Pit mix'
//     })
// })

// db.user.findOne().then((foundUser) => {
//     foundUser.getPets().then((foundPets) => {
//         console.log(foundPets);
//     })
// })

// db.pet.findOne({
//     where: {
//         name: 'Violet'
//     }
// }).then((violet) => {
//     violet.getUser().then((foundUser) => {
//         console.log(foundUser);
//     })
// })

// db.pet.create({
//     name: 'Hercules',
//     species: 'Min pin'
// }).then((herc) => {
//     console.log(herc);
// })

// db.pet.findOne({
//     where: {
//         name: 'Hercules'
//     }
// }).then((herc) => {
//     // 86 will run before 85 is finished!
//     // const user = db.user.findOne()
//     // herc.addUser(user)

//     db.user.findOne().then((foundUser) => {
//         herc.setUser(foundUser)
//     })
// })

// db.toy.create({
//     type: 'squeaky',
//     color: 'red'
// })

// db.pet.findOne({
//     where: {
//         name: 'Moose'
//     }
// }).then((moose) => {
//     db.toy.findOne({
//         where: {
//             color: 'red',
//             type: 'squeaky'
//         }
//     }).then((foundToy) => {
//         moose.addToy(foundToy)
//     })
// })

// db.pet.findOne({
//     where: {
//         name: 'Violet'
//     }
// }).then((violet) => {
//     db.toy.findOne({
//         where: {
//             color: 'red',
//             type: 'squeaky'
//         }
//     }).then((foundToy) => {
//         violet.addToy(foundToy)
//     })
// })

db.toy.findOne({
    where: {
        type: 'squeaky',
        color: 'red'
    }
}).then((foundToy) => {
    foundToy.getPets().then((pets) => {
        console.log(pets);
    })
})


