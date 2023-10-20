const { spawn } = require("child_process");
const path = require("path");
const fs = require("fs");

async function downloadVideo(link, filename, onProgress) {
  const downloadFolder = path.join(__dirname, '..', 'downloads');
  if (!fs.existsSync(downloadFolder)) {
    fs.mkdirSync(downloadFolder);
  }

  const filePath = path.join(downloadFolder, filename);
  const download = spawn('youtube-dl', ['-o', filePath, link]);

  download.stdout.on('data', (data) => {
    const output = data.toString();
    const match = output.match(/(\d+\.\d)%/);
    if (match && onProgress) {
      onProgress(parseFloat(match[1]));
    }
  });

  return new Promise((resolve, reject) => {
    download.on('close', (code) => {
      if (code !== 0) {
        reject(new Error('Error downloading VOD.'));
      } else {
        resolve(filePath);
      }
    });
  });
}

module.exports = downloadVideo;
