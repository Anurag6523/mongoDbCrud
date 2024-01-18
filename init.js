const mongoose= require("mongoose");
const Chat= require("./models/chat.js");


main().then(()=>{
    console.log("connection successfull with the db");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/msgchat');

}

let allChats=[
    {
        from: "neha",
        to: "priya",
        msg: "send me your exam sheets",
        created_at: new Date(),
    },
    {
        from: "Aman",
        to: "priya",
        msg: "work hard yaar",
        created_at: new Date(),
    },
    {
        from: "prince",
        to: "surya",
        msg: "you are a talented person",
        created_at: new Date(),
    },
    {
        from: "bheem",
        to: "priya",
        msg: "just learn the SQL",
        created_at: new Date(),
    },
    {
        from: "Kajal",
        to: "Devesh",
        msg: "pick me sharply at 11:00pm",
        created_at: new Date(),
    },
    {
        from: "prerna",
        to: "prince",
        msg: "you are a charming person",
        created_at: new Date(),
    },
    {
        from: "Aman",
        to: "Amit",
        msg: "Go to hell",
        created_at: new Date(),
    },
]

Chat.insertMany(allChats);