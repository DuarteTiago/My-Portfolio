const router = require("express").Router();
const Portfolio = require("../models/Portfolio");
//Create
router.post("/", async (req, res) => {
  const portfolio = new Portfolio({
    title: req.body.title,
    description: req.body.description,
    longDescription: req.body.longDescription,
    image: req.body.image,
    technologies: req.body.technologies,
  });

  try {
    const savedPortfolio = await portfolio.save();
    res.json({
      success: true,
      data: savedPortfolio,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error,
    });
  }
});
//Read
router.get("/", async (req, res) => {
  try {
    const portfolio = await Portfolio.find();

    res.json({
      success: true,
      data: portfolio,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error,
    });
  }
});

router.get("/:slug", async (req, res) => {
  try {
    const portfolio = await Portfolio.findOne({
      slug: req.params.slug,
    });
    res.json({
      success: true,
      data: portfolio,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error,
    });
  }
});
//Update
router.patch("/:slug", async (req, res) => {
  try {
    const updatedPortfolio = await Portfolio.updateOne(
      {
        slug: req.params.slug,
      },
      {
        $set: {
          title: req.body.title,
          description: req.body.description,
          longDescription: req.body.longDescription,
          image: req.body.image,
          technologies: req.body.technologies,
        },
      }
    );
    // console.log({ slug });
    // console.log({ updatedPortfolio });
    // console.log(parmetriBody);
    return res.json({
      success: true,
      updated: updatedPortfolio.Count,
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: error,
    });
  }
});
//Delete

router.delete("/:slug", async (req, res) => {
  try {
    const deletedPortfolio = await Portfolio.deleteOne({
      slug: req.params.slug,
    });
    return res.json({
      success: true,
      deleted: deletedPortfolio.deletedCount,
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: error,
    });
  }
});

module.exports = router;
