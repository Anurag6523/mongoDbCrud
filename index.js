const express= require("express");
const app= express();
const mongoose= require("mongoose");
const path= require("path");
const Chat= require("./models/chat.js");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended: true}));


main().then(()=>{
    console.log("connection successfull with the db");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/msgchat');

}

//index Route
app.get("/chats",async(req,res)=>{
    
    let chats= await Chat.find();
    console.log(chats);
    res.render("index.ejs", {chats});
})

// app.use((req,res)=>{
//     res.send("hi aman anurag");
// })

app.listen(3000, ()=>{
    console.log("port is connected successfully from port no-3000");
})