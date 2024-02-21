require('dotenv').config()
const { model, Schema } = require('mongoose')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')


const blogSchema = new Schema ({
    name: { required: true, type: String },
    email: { required: true, type: String },
    password: { required: true, type: String },
    posts: [{ type: Schema.Types.ObjectId, ref: 'Blog'}],
    comments: [{ type: Schema.Types.ObjectId, ref: 'Comment'}],
}, {
    timestamps: true
})

userSchema.pre('save', async function(next) {
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 8)
    }
    next()
})

userSchema.methods.generateAuthToken = async function() {
    const secretKey = process.env.JWT_SECRET
    const token = jwt.sign({ _id: this._id }, secretKey)
    return token
}

const User = model('User', userSchema)

module.exports = User