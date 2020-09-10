const {Schema, model, SchemaTypes} = require('mongoose');
//schema
const userSchema = Schema (
    {
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        }
    }
);

//model
module.exports.User = model('User', userSchema);
