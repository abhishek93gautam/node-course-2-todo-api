
//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
	if(err)
	{
		return console.log('Unable to connect to Mongodb server');
	}

	console.log('Connected to Mongodb server');
	// deleteMany
	// db.collection('Todos').deleteMany({text:'Eat lunch'}).then((result)=>{
	// 	console.log(result);
	// });

	//deleteOne
	// db.collection('Todos').deleteOne({text:'Eat lunch'}).then((result)=>{
	// 	console.log(result);
	// });

	// findOneAndDelete
	db.collection('Users').findOneAndDelete({_id : new ObjectID('5aae722a1c27b7b400fb00e2')}).then((result)=>{
	 	console.log(result);
	});

	//db.close();
});