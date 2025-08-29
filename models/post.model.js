import mongoose from "mongoose"


const PostSchema = new mongoose.Schema({



    title:{
        type:String,
        required:true,

    },

    images:{
        type:[String],
        default:[]
    },
    
    description:{
        type:String,
        
    },

    rating:{
        type:Number,
        default:0
    },

    type:{
        type:String,
        default:"None"
    },

    genre:{
        type:[String],
        default:[]
    },

    likes:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"User"

        }
    ],

    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
   },
   



},{timestamps:true})


export const Post = mongoose.model ("Post", PostSchema);