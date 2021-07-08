const app = require('express')();
const httpServer = require('http').createServer(app);
const { Server } = require('socket.io');
const io = new Server(httpServer, {
  cors: {
    origin: '*'
  }
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', socket => {
  console.log(`Socket conectado ${socket.id}`);
});

httpServer.listen(3000, () => console.log(`Server is running on port 3000`))