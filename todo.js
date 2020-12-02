var express = require("express");
var router = express.Router();

//GET,POST,PUT,DELETE

//Get: reads  Post: creates Put: updates  Delete: deletes

router.post("/:id", (req, res) => {
  const isComplete = req.body.isComplete === "true";
  const title = req.body.title;
  res.json({
    isComplete: isComplete,
    title: title,
  });
});

router.delete("/:id");

module.exports = router;
