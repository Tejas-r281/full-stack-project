const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/dyanamic",{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology: true
}).then(()=>{
    console.log(`connection successfully established`);
})
.catch((e)=>{
    console.log(`some error has been occured so far`);
})