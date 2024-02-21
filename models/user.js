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

const User = model('User', userSchema)

module.exports = User