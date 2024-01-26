const { dlAudio } = require("youtube-exec");

// Using Promises
dlAudio({
  url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  folder: "downloads", // optional, default: "youtube-exec"
  filename: "filename", // optional, default: video title
  quality: "lowest", // or "lowest"; default: "best"
})
  .then(() => {
    console.log("Audio downloaded successfully! 🔊🎉");
  })
  .catch((err) => {
    console.error("An error occurred:", err.message);
  });