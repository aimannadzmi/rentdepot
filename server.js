// const multer = require("multer");
const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const routes = require("./routes");
const app = express();


var db = require("./models");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here
app.use(routes);

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log(`🌎 ==> API Server now listening on PORT ${PORT}!`);
  });
});

// const storage = multer.diskStorage({
//   destination: './files',
//   filename(req, file, cb) {
//     cb(null, `${new Date()}-${file.originalname}`);
//   },
// });

// const upload = multer({ storage });

// // express route where we receive files from the client
// // passing multer middleware
// app.post('/files', upload.single('file'), (req, res) => {
//  const file = req.file; // file passed from client
//  const meta = req.body; // all other values passed from the client, like name, etc..
 
//  // send the data to our REST API
//  axios({
//     url: `https://api.myrest.com/uploads`,
//     method: 'post',
//     data: {
//       file,
//       name: meta.name,      
//     },
//   })
//    .then(response => res.status(200).json(response.data.data))
//    .catch((error) => res.status(500).json(error.response.data));
// });