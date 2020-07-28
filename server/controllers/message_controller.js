const messages = [];
let id = 0;

module.exports = {
    createMessage: (req, res) => {
        const {text, time} = req.body;
        id++;
        let newMessage = {id, text, time};
        messages.push(newMessage);
        res.status(200).send(messages);
    },
    readMessage: (req, res) => {
        res.status(200).send(messages);
    },
    updateMessage: (req, res) => {
        const index = messages.findIndex( elem => elem.id === +req.params.id);
        if(index === -1){
            res.status(404).send(`I don't seem to be able to locate a message with the ID of ${+req.params.id}`)
        } else {
            messages[index].text = req.body.text
            res.status(200).send(messages)
        }
    },
    deleteMessage: (req, res) => {
        const indexToDelete = messages.findIndex( elem => elem.id === +req.params.id)
        if(indexToDelete === -1){
            res.status(404).send(`I don't seem to be able to locate a message with the ID of ${+req.params.id}`)
        } else {
            messages.splice(indexToDelete, 1)
            res.status(200).send(messages)
            }

    }
}
