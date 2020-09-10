const {Schema, model, SchemaTypes} = require('mongoose');

const questionSchema = Schema(
    {
        text: {
            type: String,
            required: true
        },
        options:[{
            text: {
                type: String,
                required: true
            },
            correct: Boolean
        }],
    },
    { timestamps: true },
);

module.exports.Question = model('Question', questionSchema);