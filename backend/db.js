const mongoose = require("mongoose");
const {Schema} = mongoose;
const mySchema = new Schema()
const dotenv = require("dotenv")
dotenv.config({path:'.env'})
const mongoURI = process.env.DATABASE_URL
const mongoDB = async () => {
   try {
   await mongoose.connect(mongoURI,{ useNewUrlParser: true });
   console.log('connected')
   const fetched_data = await mongoose.model('food_items', mySchema).find({});
   global.food_items = fetched_data;
   const fetched_category = await mongoose.model('food_categories', mySchema).find({});
   global.food_category = fetched_category;
   console.log('loaded');
   } catch (error) {
    console.log(error)
   }

    
}
 
module.exports = mongoDB();


