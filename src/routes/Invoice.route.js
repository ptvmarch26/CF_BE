const express = require("express");
const router = express.Router();
const invoiceController = require("../controllers/Invoice.controller");

router.post("/", invoiceController.createInvoice);
router.get("/", invoiceController.getInvoices);
router.get("/:id", invoiceController.getInvoiceById);

module.exports = router;
