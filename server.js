const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const path = require("path");
const db = require("./src/config/db");
const route = require("./src/routes/index.route");
const swaggerUi = require("swagger-ui-express");
const swaggerDocs = require("./src/config/swagger");
const responseHandler = require("./src/middlewares/ResponseHandler");
require("./src/chronos/OrderChecker");
require("./src/chronos/MonthlySnapshot");

require("dotenv").config();

db.connect();
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
// app.use(morgan("combined"));

// ❌ Remove static if no public folder
// app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ✅ FIX CORS
app.use(
  cors({
    origin: ["https://cf-fe-zeta.vercel.app"],
    methods: "GET,POST,PUT,PATCH,DELETE",
    credentials: true,
  })
);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use(responseHandler);

// Routes
route(app);

// ✅ FIX route "/"
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Start server
app.listen(PORT, "0.0.0.0", () => {
  console.log("Server is running on port " + PORT);
});

module.exports = app;
