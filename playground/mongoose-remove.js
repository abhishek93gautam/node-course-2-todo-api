
const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

const {User} = require('./../server/models/user');

// Todo.remove({}).then((result)=>{
// 	console.log(result);
// });


// Todo.findOneAndRemove({_id:'5ab76eb7f8067c8d04c009ab'}).then((todo)=>{

// });

Todo.findByIdAndRemove('5ab76eb7f8067c8d04c009ab').then((todo)=>{
	console.log(todo);
});