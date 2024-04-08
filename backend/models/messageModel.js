const mongoose = require("mongoose");
//Schema consist of name,id of the sender,,the content of the message,,reference of chat that its belongs too..
const messageModel = mongoose.Schema(
    {
        sender :{type:mongoose.Schema.Types.ObjectId,ref:'User'},
        content :{String,trim:true},
        chat :{type:mongoose.Schema.Types.ObjectId,ref:'User'},
    },
    {
        timestamps: true,
    }
);

const Message = mongoose.model("Message", messageModel);

module.exports = Message;