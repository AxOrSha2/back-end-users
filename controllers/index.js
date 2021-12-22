const UsersControllers = require('./UsersControllers');

exports.registrarControllers = (app) => {
    app.use('/users',UsersControllers);
};

