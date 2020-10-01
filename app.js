const express = require("express");
const morgan = require("morgan");

const app = express()
app.use(morgan("dev"))
//using dev to tell morgan what to output. Can also use tiny (and others?) to tailor the output from morgan

app.use(express.static(__dirname + "/public"))
//not using path.join because we dont need to consider the windows/mac relationship with \ and /

app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
    res.send('HELLO WORLD')
})

const PORT = 1337;

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});
