const net = require('net');

const port = process.argv[2]; 

function getCurrentTime() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0'); 
    const day = String(now.getDate()).padStart(2, '0'); 
    const hours = String(now.getHours()).padStart(2, '0'); 
    const minutes = String(now.getMinutes()).padStart(2, '0'); 
    return `${year}-${month}-${day} ${hours}:${minutes}\n`; d
}

const server = net.createServer(socket => {
    socket.end(getCurrentTime()); 
});

server.listen(port); 
