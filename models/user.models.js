import mongoose from "mongoose"
import bcrypt from "bcrypt"

const UserSchema = new mongoose.Schema({

UserName:{
    type:String,
    required:true,
    minLength:[4, "UserName must be greater than 4 letters"]
    
},

email:{
    type:String,
    required:true,
    unique:true,
    validate:{
        validator: (v)=> v.includes('@'),
        message:"Email must contain @"
    },
    lowercase:true,

},

password:{
    type:String,
    required:true,
    minLength:[4, "Password must be greater than 4 letters"],
    maxLength:[20, "Password can't be greater than 20 letters"]
},

role:{
    type:String,
    enum:["user", "admin"],
    default:"user"

},

profilepic:{
    type:String,
    default:"",

}

},{timestamps:true})

UserSchema.pre("save", async function(next){
    if(!this.isModified("password")){
        return next();
    }

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password,salt);

})

UserSchema.methods.ComparePassword = async function(password){
    return await bcrypt.compare(password, this.password);
}





export const User = mongoose.model ("User", UserSchema);


