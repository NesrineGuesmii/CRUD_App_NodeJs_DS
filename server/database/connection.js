const mongoose = require('mongoose')
//mongodb://localhost:27017/dbname
mongoose.connect('mongodb+srv://crud:crud@cluster0.3np7sxc.mongodb.net/crud_students?retryWrites=true&w=majority')
.then(()=>console.log('MongoDB is connected'))
.catch(err=>console.error('Mongo not connected, error :',err.message))