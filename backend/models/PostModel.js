const mongoose = require('mongoose')

const schema = mongoose.Schema;

const PostSchema = new schema({
    postedBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    text0:{
        type: String,
        maxLength:500
    },
    img:{
        type: String,
    },
    likes:{
        type: Number,
        default: 0
    },
    replies:[
        {
            userId:{
                type: mongoose.Schema.Types.ObjectId,
                ref: 'user',
                required: true
            },
            text:{
                type: String,
                required: true
            },
            userProfilePic:{
                type: String,
            },
            username:{
                type: String
            }
        }
    ]
},{
    timestamps: true,
})

const post = mongoose.model('post', PostSchema)

module.exports = post;