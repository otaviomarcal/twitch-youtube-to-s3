require('dotenv').config();
const getFilename = require('./src/filename');
const downloadVideo = require('./src/download');
const uploadToS3 = require('./src/upload');

const linksArray = [
  // "https://www.twitch.tv/videos/1936010630"
  "https://www.youtube.com/watch?v=pQKXnM9NbQk"
];

linksArray.forEach(async (link) => {
  try {
    const filename = await getFilename(link);
    const filePath = await downloadVideo(link, filename, (progress) => {
      process.stdout.write(`Downloading: ${progress.toFixed(2)}%\r`);
    });
    console.log("\nDownload finished.");

    await uploadToS3(filePath, (progress) => {
      process.stdout.write(`Uploading: ${progress.toFixed(2)}%\r`);
    });
    console.log("\nUpload completed");
  } catch (error) {
    console.error(error);
  }
});
