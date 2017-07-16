class Message {
    constructor (id, senderId, receiverId, text) {
        this.id = id;
        this.senderId = senderId;
        this.receiverId = receiverId;
        this.text = text;
    }
}

const messages = [
    new Message(1, 2, 1, "The Wall"),
    new Message(2, 2, 3, "Wish you were here"),
    new Message(3, 1, 2, "Dark side of the moon"),
    new Message(4, 3, 2, "See Emily play"),
    new Message(5, 1, 3, "Atomheart mother"),
];

function lastMessageId() {
    return messages[length-1].id;
}


module.exports = {
    newMessage: function (data) {
        return new Message(messages[length-1].id + 1, data.senderId, data.receiverId, data.text);
    },

    findMessageById: function (id) {
        const msg = messages.filter(message => message.id == id);
        return msg ? msg[0] : new Error('Message not found');
    },

    findBySenderId: function (senderId) {
        return messages.filter(message => message.senderId == senderId);
    },

    addMessage: function (message) {
        messages.push(message);
    },

    deleteMessageById: function(id) {
        let index = messages.findIndex((message) => message.id == id);
        if (index == -1) {
            throw new Error('Message not found')
        } else {
            messages.splice(index, 1);
        }

    },

    updateMessageById: (id, properties) => {
        let message = module.exports.findMessageById(id);
        for (let prop in properties) {
            if (message.hasOwnProperty(prop)) {
                message[prop] = properties[prop]
            }
        }
        return message;
    }
};