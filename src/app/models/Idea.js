const { Schema, model } = require('mongoose')

const IdeasSchema = new Schema({
    name: {
        type: String,
        required:true
    },
    about: {
        type: String,
        required: true,
    },
    user_email: {
        type: Schema.Types.ObjectId,
        required: true,
        unique: true,
        ref: 'Users'
    },
    comment: {
        type: Schema.Types.ObjectId,
        ref: 'Comments'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
}, {
    timestamps: true
})

module.exports = model('Ideas', IdeasSchema)