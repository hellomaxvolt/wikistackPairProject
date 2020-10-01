const router = require("express").Router();
const wikipage = require('../views/wikipage')
//do we want to include everything that is inside the views folder?
//may need to add connectivity to database. 

console.log(wikipage())



//below will display the /wiki url
router.get("/", async (req, res) => {
    try {
      res.send(wikipage());
    } catch (error) {
      res.status(500).send(`Something went wrong: ${error}`);
    }
  });