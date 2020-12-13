const { Schema, model } = require('mongoose')

const CommentsSchema = new Schema({
    sender_name: {
        type: String,
        required:true
    },
    comment: {
        type: String,
        required: true,
    },
    ideaId: {
        type: Schema.Types.ObjectId,
        required: true,
        unique: true,
        ref: 'Ideas'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
}, {
    timestamps: true
})

module.exports = model('Comments', CommentsSchema)