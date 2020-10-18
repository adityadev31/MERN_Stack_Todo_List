const mongoose = require('mongoose');
const Todo = mongoose.Schema({
   todo_description: {
      type: String,
      required: true
   },
   todo_responsible: {
      type: String,
   },
   todo_priority: {
      type: String,
   },
   todo_completed: {
      type: Boolean,
   }
});

mongoose.model('todos', Todo);
module.exports = mongoose.model('todos');