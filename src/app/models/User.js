const { Schema, model } = require('mongoose')

const UserSchema = new Schema({
    name: String,
    lastName: String,
    whatsapp: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
}, {
    timestamps: true
})


UserSchema.pre('save', () => {

})


module.exports = model('Users', UserSchema)
