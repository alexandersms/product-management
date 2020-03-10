const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv");
const morgan = require("morgan");
const connectDB = require("./config/db")


dotenv.config({ path: './config/config.env' });

connectDB();

const app = express();
app.use(express.json())

/* Middleware */
// Morgan
if(process.env.NODE_ENV === "development"){
    app.use(morgan("dev"))
}

// Import Routes
const ProductRoute = require("./routes/Product.route");

app.use("/products", ProductRoute);

app.use((req, res, next) => {
  const err = new Error("Non trouvée");
  err.status = 404;
  next(err);
});

// Error handler
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    error: {
      status: err.status || 500,
      message: err.message
    }
  });
});

const port = process.env.PORT || 3420;

app.listen(port, () => console.log(`Démarrage du server en environnement de ${process.env.NODE_ENV} sur le port ${port}`.blue.bold));
