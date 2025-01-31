const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())

const getInfo = (req,res) => {
  const currentDateTime = new Date().toISOString()

  res.status(200).json({
    email: process.env.EMAIL,
    current_datetime: currentDateTime ,
    github_url : process.env.GITHUB_URL
  })
}

app.get("/", getInfo)

module.exports = app