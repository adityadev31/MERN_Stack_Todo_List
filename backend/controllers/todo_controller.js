const router = require('express').Router();
const bodyParser = require('body-parser');
const Todo = require('../models/todo');


// middle ware
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true}));


// CRUD ACTIONS
router.get(
   '/',
   (req, res) => {
      Todo.find({}, (err, data) => {
         if(err) console.log(err);
         else res.json(data);
      });
   }
);

router.get(
   '/:id',
   (req, res) => {
      let id = req.params.id;
      Todo.findById(id, (err, data) => {
         if(err) res.json(err);
         else res.json(data);
      });
   }
);

router.post(
   '/add',
   (req, res) => {
      let todo = new Todo(req.body);
      todo.save()
      .then(()=>res.status(200).json({"todo": "todo added successfully"}))
      .catch(() => res.status(404).json({"error" : "todo not inserted !!"}));
   }
);

router.post(
   '/update/:id',
   (req, res) => {
      Todo.findById(req.params.id, (err, data) => {
         if(!data) res.status(404).send('data not found');
         else{
            data.todo_description = req.body.todo_description;
            data.todo_responsible = req.body.todo_responsible;
            data.todo_priority = req.body.todo_priority;
            data.todo_completed = req.body.todo_completed;
            data.save()
               .then(todo => res.json('Todo updated'))
               .catch(err => res.status(400).send("update not possble"));
         }
      });
   }
);


router.delete(
   '/delete/:id', (req, res) => {
      let id = req.params.id;
      Todo.findByIdAndRemove(id, (err, data) => {
         if(err) console.log(err);
         else res.json(data);
      });
   }
);


module.exports = router;