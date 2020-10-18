require('dotenv').config();
const DB_URL = process.env.DB_URL;
const mongoose = require('mongoose');

mongoose.connect(
   DB_URL,
   {
      useNewUrlParser: true,
      useUnifiedTopology: true
   }
).then(()=>console.log(`db connected successfully...`))
 .catch(()=>console.log(`db connection failed !!`));
