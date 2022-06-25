const { Router } = require('express');
const { homePage, syncData, countData } = require('../controllers/index.controller');

const router = Router();

router.get('/', homePage);

router.get('/sync', syncData)

router.get('/count', countData)

module.exports = {
    router
}