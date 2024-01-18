const mongoose= require("mongoose");
const {Schema}= mongoose;

const chatSchema= new Schema({
    from:{
        type: String,
        required: true,
    },
    to:{
        type: String,
        required:true,
    },
    msg:{
        type: String,
        maxLength:50 
    },
    created_at:{
        type:Date,
        reuired: true
    }
});

const Chat= mongoose.model("Chat", chatSchema);
module.exports= Chat;