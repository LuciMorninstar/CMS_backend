import mongoose from "mongoose"




const CommentSchema = new mongoose.Schema({

    postId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Post",
        required:true
    },

    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },

    ownerpic:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },

    comment:{
        type:String,
        required:true,
    },

 likers:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"User"
        }
    ]







},{timestamps:true})


export const Comment = mongoose.model("Comment", CommentSchema )