// services/aiVideoService.js
const { exec } = require('child_process');
const path = require('path');

const callPythonScript = (apiKey, platform, inputData) => {
  return new Promise((resolve, reject) => {
    const scriptPath = path.join(__dirname, '../apiHandler.py');
    const args = JSON.stringify({ api_key: apiKey, platform, input_data: inputData });

    exec(`python3 ${scriptPath} '${args}'`, (error, stdout, stderr) => {
      if (error) {
        reject(new Error(`Python script error: ${stderr}`));
      } else {
        try {
          const result = JSON.parse(stdout);
          if (result.error) {
            reject(new Error(result.error));
          } else {
            resolve(result);
          }
        } catch (parseError) {
          reject(new Error('Failed to parse Python script output'));
        }
      }
    });
  });
};

const generateVideoWithRunway = async (inputData) => {
  const apiKey = process.env.RUNWAY_API_KEY;
  return callPythonScript(apiKey, 'runway', inputData);
};

module.exports = {
  generateVideoWithPika,
  generateVideoWithRunway,
};