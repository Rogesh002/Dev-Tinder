import express from 'express';

let app = express();

console.log('HIIIII');


app.get('/',(req,res)=>{
    res.send("HIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII");
    console.log("WElcome EveryOne");
    
});


app.use('/test',(req,res)=>{
    res.send("WEEEEEEEEELLLLLCCCCOOOOOOOOOMMMMMMMMEEEEEEE");
    console.log('WEEEEEELLLLCCOMEEEEEEEEEE');
    
})
app.listen(7001,()=>{
    console.log("Listening to the port :"+ 7001);
    
});

console.log("listening to the port 7001");
