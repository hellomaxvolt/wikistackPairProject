const express = require("express");
const morgan = require("morgan");
const main = require("./views/main")
const { db, Page, User } = require('./models');


const app = express();

db.authenticate()
  .then(() => {
    console.log('connected to the database');
  })

app.use(morgan("dev"));
//using dev to tell morgan what to output. Can also use tiny (and others?) to tailor the output from morgan

app.use(express.static(__dirname + "/public"));
//not using path.join because we dont need to consider the windows/mac relationship with \ and /

app.use(express.urlencoded({ extended: false }));

app.use("/wiki", require("./routes/wiki"))


app.get("/", (req, res) => {
  res.send(main(''));
});

const PORT = 1337;

const init = async () => {
  await Page.sync();
  await User.sync();
  // make sure that you have a PORT constant
  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}!`);
  });
}

init();
