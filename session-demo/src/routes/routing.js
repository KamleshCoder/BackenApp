const express = require('express');
const router = express.Router();

router.post('/session', (req, res, next) => {
    req.session.user = { username: 'John Doe', password: 'John@123' };
    res.send("User Session Created Successfully");
})

router.get('/session', (req, res, next) => {
    res.json(req.session);
})

router.put('/update-session', (req, res, next) => {
    req.session.user.password = 'JohnDoe@1';
    res.send(`Password for ${req.session.user.username} updated successfully`);
})

module.exports = router;
