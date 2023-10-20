const { exec } = require("child_process");

function getFilename(link) {
  return new Promise((resolve, reject) => {
    const command = `youtube-dl --get-filename -o "%(uploader)s_%(upload_date)s_%(title)s.%(ext)s" ${link}`;
    exec(command, (error, stdout, stderr) => {
      if (error) {
        reject(error);
        return;
      }
      resolve(stdout.trim());
    });
  });
}

module.exports = getFilename;
