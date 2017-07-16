const router = require('express').Router();
const userService = require('../../services/user');
const messageService = require('../../services/message');

router.get('/:id', (req, resp) => {
    try {
        resp.data = userService.findById(Number(req.params.id));
        resp.json(resp.data);
    }
    catch (error) {
        resp.status(400);
        resp.end();
    }
});

router.get("/:id/chatwith", (req, resp) => {
    let messages = messageService.findBySenderId(Number(req.params.id));
    let receiverIds = Array.from(new Set(messages.map(message => message.receiverId)));
    resp.json(receiverIds.map(receiverId => userService.findUserById(receiverId)));
});

router.post("/", (req, resp) => {
    try {
        let user = userService.newUser(req.body);
        userService.add(user);
        resp.data = user;
        resp.json(resp.data);
    } catch (error) {
        resp.status(400);
        resp.end();
    }
});

router.delete('/:id', (req, resp) => {
    try {
        userService.deleteUserById(Number(req.params.id));
        resp.status(200);
    } catch (error) {
        resp.status(400);
    }
    resp.end();
});

router.put('/:id', (req, resp) => {
    try {
        resp.data = userService.updateUserById(Number(req.params.id), req.body);
        resp.json(resp.data);
    } catch (error) {
        resp.status(400);
    }
    resp.end();
});



module.exports = router;