const express = require('express');
const router = express.Router();
const { uploadFile } = require('../controller/uploadController');
const upload = require('../middleware');

router.post('/upload', upload.single('file'), uploadFile);

module.exports = router;