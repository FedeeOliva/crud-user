const mongoose = require('mongoose');

const conectarDB = async () =>{
	try{
		await mongoose.connect('mongodb://localhost:27017/cruduser', {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		//	useFindAndModify: false,
		//	useCreateIndex: true
		});
		console.log("DB Conectada");
	}catch(error){
		console.log(error);
		process.exit(1);
	}
}	

module.exports = conectarDB;