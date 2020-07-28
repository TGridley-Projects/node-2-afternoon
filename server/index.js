const express = require('express');
const messageController = require('./controllers/message_controller')
const app = express();
app.use(express.json());
const port = 3001;

app.post('/api/messages', messageController.createMessage)
app.get('/api/messages', messageController.readMessage);
app.put('/api/message/update/:id', messageController.updateMessage);
app.delete('api/messages/:id', messageController.deleteMessage);





app.listen(port, () => {
    console.log(`I'm listening on port: ${port}`)
})

