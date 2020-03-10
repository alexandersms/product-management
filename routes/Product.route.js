const router = require("express").Router();

router.get("/", (req, res, next) => {
  next(new Error("Impossible de charger tous les produits"));
  //res.send("Récupération de tous les produits...");
});

router.post("/", (req, res, next) => {
  res.send("Création d'un produit");
});

// Routes parameters
router.get("/:id", (req, res, next) => {
  res.send("Récupération d'un produit");
});

router.patch("/:id", (req, res, next) => {
  res.send("Modification d'un produit");
});

router.delete("/:id", (req, res, next) => {
  res.send("Suppression d'un produit");
});

module.exports = router;
