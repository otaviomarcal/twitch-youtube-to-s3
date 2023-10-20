const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");
const fs = require("fs");

const awsS3 = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

async function uploadToS3(filePath, onProgress) {
  const fileStream = fs.createReadStream(filePath);
  const params = {
    Key: path.basename(filePath),
    Bucket: "vods-twitch",
    Body: fileStream,
    ContentType: "video/mp4",
  };
  const totalSize = fs.statSync(filePath).size;
  let uploadedSize = 0;

  fileStream.on("data", (chunk) => {
    uploadedSize += chunk.length;
    const progress = ((uploadedSize / totalSize) * 100).toFixed(2);
    onProgress(parseFloat(progress));
  });

  await awsS3.send(new PutObjectCommand(params));
  fs.unlinkSync(filePath);
}

module.exports = uploadToS3;
