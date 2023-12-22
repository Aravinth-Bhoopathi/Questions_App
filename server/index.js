const express = require('express')
const app = express()
const configueDb=require('./config/database')
require('dotenv').config()
const cors = require('cors')
const router=require('./config/routes')
const port = 3210

app.use(express.json())
app.use(cors())
configueDb()
app.use(router)

app.listen(port,()=>{
    console.log('server connected to port', port)
})