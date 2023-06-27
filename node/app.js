const express = require('experss');
const app = express();
let PORT =5000

app.get('/',(req,res)=>{
    res.send("I am a server")
})

const start = async ()=>{
    try{
        app.listen(PORT,()=>{
            console.log(`I am live on port ${PORT}`)
        })
    }catch (error){}
}