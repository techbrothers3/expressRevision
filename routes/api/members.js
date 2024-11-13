const express = require('express');
const uuid = require('uuid');
const router = express.Router();
const members = require('../../members');

    // get single member
router.get('/:id', (req,res,next) => {
    const found = members.some(member => member.id === parseInt(req.params.id));
    if(found) {
        res.json(members.filter(member => member.id === parseInt(req.params.id)));
    } else {
        res.status(400).json({msg: `no member with id of ${req.params.id}`});
    }
});

// get all members
router.get('/', (req, res) => {
    res.json(members);
});

router.post('/', (req,res) => {
    const newMember = {
        id: uuid.v4(),
        name: req.body.name,
        email: req.body.name,
        status: "active"
    };

    if(!newMember.name || !newMember.email) {
        res.status(400).json({msg: 'please include a name and email'});
    }
    members.push(newMember);
    res.json(members);
})

module.exports = router;