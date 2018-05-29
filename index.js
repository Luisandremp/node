var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile('http://node-luisandrelearning.7e14.starter-us-west-2.openshiftapps.com/index.html');
});

io.on('connection', function(socket){
  //console.log('a user connected');

  socket.on('msg', function(msg){
   
    io.emit('msg', msg);
  });
  
  socket.on('disconnect', function(){
    //console.log('user disconnected');
	});

 

  
})

http.listen(8080, function(){
  //console.log('listening on *:3000');
});