const router = require("express").Router();
require("../db/mongoConnection");

const portfolio = require("./portfolio");

router.get("/", (req, res) => {
  res.json({
    success: false,
    message: "please, do not call /api, ot is for our server",
  });
});

router.use("/portfolio", portfolio);
module.exports = router;
