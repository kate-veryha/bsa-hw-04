class User {
    constructor(id, name, email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }
}

const users = [
    new User(1, 'Ozzy', 'oz@mail.com'),
    new User(2, 'Sam', 'sa@mail.com'),
    new User(3, 'Irene', 'ir@mail.com'),
];


module.exports = {
    newUser: function (data) {
        return new User(users[length-1].id + 1, data.name, data.email);
    },

    findUserById: function (id) {
        const user = users.filter(message => message.id == id);
        return user ? user[0] : new Error('User not found');
    },

    addUser: function (user) {
        users.push(user);
    },

    deleteUserById: function (id) {
        let index = users.findIndex((user) => user.id == id);
        if (index == -1) {
            throw new Error(`User doesn't exist`)
        }
        users.splice(index, 1);
    },

    updateUserById: (id, properties) => {
        let user = module.exports.findUserById(id);
        for (let prop in properties) {
            if (user.hasOwnProperty(prop)) {
                user[prop] = properties[prop]
            }
        }
        return user;
    }
};



