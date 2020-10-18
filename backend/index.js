
require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT;

// connecting database
const db = require('./db_con');
const todoRoutes = require('./controllers/todo_controller');   // connecting model using controller

// middle ware and model
app.use(cors());
app.use('/todos', todoRoutes);


// app listen
app.listen(PORT, ()=>console.log(`server running on PORT: ${PORT}`));