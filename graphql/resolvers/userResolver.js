
const providers = {
    users: []
};

let id = 0;

exports.default = {
    user({ id }) {
        return providers.users.find(item => item.id === Number(id));
    },
    users() {
        return providers.users;
    },
    createUser({ name, repo, age }) {
        const user = {
            id: id++,
            name,
            repo,
            age
        };

        providers.users.push(user);

        return user;
    }
};