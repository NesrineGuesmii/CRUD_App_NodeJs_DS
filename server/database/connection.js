const mongoose = require('mongoose')
//mongodb://localhost:27017/dbname
mongoose.connect("mongodb://localhost:27017/students")
.then(()=>console.log('MongoDB is connected'))
.catch(err=>console.error('Mongo not connected, error :',err.message))