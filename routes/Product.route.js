const router = require("express").Router();
const Product = require("../models/Product.model");

// Récupération de tous les produits
router.get("/", async (req, res, next) => {
  try {
    const result = await Product.find({}, { __v: 0 });
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json(err.message);
  }
});

//Créer un produit
router.post("/", async (req, res, next) => {
  try {
    const product = new Product(req.body);
    const result = await product.save();
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json(err.message);
  }
});

// Routes parameters
router.get("/:id", async (req, res, next) => {
  const id = req.params.id;
  try {
    const product = await Product.findById(id);
    res.status(200).json(product);
  } catch (err) {
    res.status(400).json(err.message);
  }
});

router.patch("/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const updates = req.body;
    const options = { new: true };
    const result = await Product.findByIdAndUpdate(id, updates, options);
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json(err.message);
  }
});

router.delete("/:id", async (req, res, next) => {
  const id = req.params.id;
  try {
    const result = await Product.findByIdAndDelete(id);
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json(err.message);
  }
});

module.exports = router;
