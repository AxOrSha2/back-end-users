const express = require('express');
const { users } = require('../models/users');
const router = express.Router();

router.get('/all', async (request, response) => {
    const page = parseInt(request.query.page);
    const limit = parseInt(request.query.limit);
    const datos = await users.find({},null,{
        sort:{userName:1},
        skip: ((page-1)*limit),
        limit: limit
    }).exec();
    response.json(datos);
});

module.exports = router;