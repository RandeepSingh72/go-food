const express = require('express')
const cors = require('cors')
const mongoDB = require('./db');
const app = express()
const port = process.env.PORT || 5000
app.use(mongoDB())

app.use((req, res, next)=>{
  res.setHeader("Access-Control-Allow-Origin","https://go-food-x2wl.vercel.app");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Accept-Version, Content-Length"
  );
  next();
})

app.use(cors({
  origin:"https://go-food-x2wl.vercel.app"
}))

app.get('/', (req, res) => {
  res.send('Hello World yo!')
  
})
app.use(express.json())
app.use('/api', require('./Routes/CreateUser'))
app.use('/api', require('./Routes/DisplayData'))
app.use('/api', require('./Routes/OrderData'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
 
})
