const express = require('express')
const dotenv = require('dotenv')
const app = express()
const cors = require('cors')
dotenv.config({ path: './.env' })
const connectDB = require('./src/db')
const userRoute = require('./src/routes/userRoutes')
const dummyAadharRoute = require('./src/routes/aadharRoutes')
const appRoute = require('./src/routes/appsRoutes')
connectDB()

app.use(express.json())
app.use(cors())
app.use('/user', userRoute)
app.use('/aadhar', dummyAadharRoute)
app.use('/apps', appRoute)
port = process.env.PORT || 5000
app.listen(port, () => {
  console.log('server is up on port ' + port)
})
// AC9e386f30a09432e90e6065a20c4873dc
// 1f5b2ab8782848ad5fdd2ffb791fa6e5
