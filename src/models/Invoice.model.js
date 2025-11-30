const mongoose = require("mongoose");

const InvoiceSchema = new mongoose.Schema(
  {
    items: [
      {
        menu_id: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Menu",
          required: true,
        },
        quantity: { type: Number, required: true },
        note: { type: String, default: "" },
      },
    ],
    total_price: { type: Number, default: 0 },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Invoice", InvoiceSchema, "Invoice");
