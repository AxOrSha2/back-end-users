const { Schema, model } = require('mongoose');

const userSchema = new Schema ({

    userName: {
        type: String,
        max: [50, 'La longitud del campo supera lo permitido.'],
        required: [true, 'El nombres es obligatorio.']
    },
    userDocument: {
        type: String,
        max: [12, 'La longitud del campo supera lo permitido.'],
        required: [true, 'El Número de documento es obligatorio.']
    },
    userTelephone: {
        type: String,
        max: [10, 'La longitud del campo supera lo permitido.']
    },
    userEmail: {
        type: String,
        max: [50, 'La longitud del campo supera lo permitido.'],
        required: [true, 'El nombres es obligatorio.']
    },
    userRole: {
        type: String,
        max: [30, 'La longitud del campo supera lo permitido.'],
        required: [true, 'El rol de usuario es obligatorio.']
    }

},{
    collection:'UsersTallerCarranza'
});

exports.users = model('users',userSchema);
