const express = require('express')
const mongoDB = require('./db')

const cors = require('cors')
const app = express()
const port = 'https://mern-food-three.vercel.app' || 5000

mongoDB()
/*app.use((req, res, next)=>{
  res.setHeader("Access-Control-Allow-Origin","http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
})*/
const corsOptions = {
  origin: 'https://mern-food-three.vercel.app',
  optionsSuccessStatus: 200 
}
app.use(cors(corsOptions))

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
