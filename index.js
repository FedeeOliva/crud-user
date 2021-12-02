const express = require('express');
const connectDB = require('./db');
const userRoute = require('./routes/user.route.js');

const app = express();
connectDB();
app.use(express.json());

  

app.use('/users',userRoute);

app.listen(4000, () =>{
	console.log(`Servidor funcionando en 4000`);
})