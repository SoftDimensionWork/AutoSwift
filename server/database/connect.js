const mongoose = require('mongoose');

const DB = process.env.DB

mongoose.connect(DB, {useNewUrlParser: true,useUnifiedTopology: true})
.then(() => {
    console.log(`Connected`);
}).catch((e) => {
    console.log(`${e}`);
})