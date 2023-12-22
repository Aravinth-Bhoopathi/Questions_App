const mongoose = require('mongoose')
mongoose.set('strictQuery', true)

const configueDb=()=>{
    mongoose.connect('mongodb://127.0.0.1:27017/ques-001')
        .then(()=>{
            console.log('connect to db')
        })
        .catch((error)=>{
            console.log("error connecting to db")
        })
}

module.exports = configueDb