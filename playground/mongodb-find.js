
//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
	if(err)
	{
		return console.log('Unable to connect to Mongodb server');
	}

	console.log('Connected to Mongodb server');
	// db.collection('Todos').find({
	// 	_id: new ObjectID('5aae394aa489090c20e05ed5')
	// 	}).toArray().then((docs)=>{
	// 	console.log('Todos');
	// 	console.log(JSON.stringify(docs,undefined,2));
	// },(err)=>{
	// 	console.log('Unable to fetch docs',err);
	// });
	// db.collection('Todos').find().count().then((count)=>{
	// 	console.log(`Todos count: ${count}`);
	// },(err)=>{
	// 	console.log('Unable to fetch docs',err);
	// });
	db.collection('Users').find({name:'Deepi'}).toArray().then((user)=>{
		console.log('User');
		console.log(JSON.stringify(user,undefined,2));
	},(err)=>{
		console.log('Unable to fetch user',user);
	});
	//db.close();
});