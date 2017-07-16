const router = require('express').Router();
const messageService = require('../../services/message');

router.get('/:id', (req, resp) => {
    try {
        resp.data = messageService.findMessageById(Number(req.params.id));
        resp.json(resp.data);
    }
    catch (error) {
        resp.status(400);
        resp.end();
    }
});

router.post("/", (req, resp) => {
    try {
        let message = messageService.newMessage(req.body);
        messageService.addMessage(message);
        resp.data = message;
        resp.json(resp.data);
    } catch (error) {
        resp.status(400);
        resp.end();
    }
});

router.delete('/:id', (req, resp) => {
    try {
        messageService.deleteMessageById(Number(req.params.id));
        resp.status(200);
    } catch (error) {
        resp.status(400);
    }
    resp.end();
});


router.put('/:id', (req, resp) => {
    try {
        resp.data = messageService.updateMessageById(Number(req.params.id), req.body);
        resp.json(resp.data);
    } catch (error) {
        resp.status(400);
    }
    resp.end();
});



module.exports = router;