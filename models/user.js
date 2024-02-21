const { model, Schema } = require('mongoose')


const blogSchema = new Schema ({
    name: { required: true, type: String },
    email: { required: true, type: String },
    password: { required: true, type: String },
    posts: [{ type: Schema.Types.ObjectId, ref: 'Blog'}],
    comments: [{ type: Schema.Types.ObjectId, ref: 'Comment'}],
}, {
    timestamps: true
})

const Blog = model('Blog', blogSchema)

module.exports = Blog