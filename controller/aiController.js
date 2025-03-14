const { generateVideoWithRunway } = require('../services/aiVideoService');

const generateVideo = async (req, res) => {
  try {
    const { inputData } = req.body;
    const result = await generateVideoWithRunway(inputData);
    res.status(200).json({ success: true, data: result });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { generateVideo };