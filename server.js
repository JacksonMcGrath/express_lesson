const express 	= require('express');
const app		= express();

//routes (listening)
app.get('/', (request, response) => {
	response.send('here is the info that is living at localhost 5555')
})

//write a route that lives at localhost:5555/home

app.get('/home', (request, response) => {
	response.send('hey you are at localhost:5555/home')
})

app.listen(5555, () => {
	console.log('Server is listening to port 5555');
})