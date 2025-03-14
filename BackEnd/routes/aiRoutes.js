// Desc: Routes for AI, the next part was a suggestive description of the code made by Copilot
// The routes for the AI module of the backend API are defined in this file using Express.js router.
// Extra: This is a snippet of the file aiRoutes.js which is used to define the routes 
// for the AI module of the backend API. The routes are defined using the Express.js router. 
// The snippet shows a single route '/generate-video' which is a POST request that calls 
// the generateVideo controller function. The controller function is responsible for 
// generating a video using AI and returning the generated video as a response. 
// The router is then exported to be used in the main app file. This is a common pattern in 
// Express.js applications where routes are defined in separate files and then imported 
// into the main app file for organization and modularity. Copilot wrote this description for clarity
const express = require('express');
const router = express.Router();
const { generateVideo } = require('../controllers/aiController');

router.post('/generate-video', generateVideo);

module.exports = router;