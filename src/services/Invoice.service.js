const Invoice = require("../models/Invoice.model");
const Menu = require("../models/Menu.model");

const createInvoice = async (body) => {
  try {
    const { items } = body;

    let total = 0;

    for (const item of items) {
      const menu = await Menu.findById(item.menu_id);

      if (!menu) {
        return {
          EC: 1,
          EM: `Không tìm thấy món ID: ${item.menu_id}`,
          data: null,
        };
      }

      total += menu.price * item.quantity;
    }

    const invoice = await Invoice.create({
      items,
      total_price: total,
    });

    return {
      EC: 0,
      EM: "Tạo hóa đơn thành công",
      data: invoice,
    };
  } catch (err) {
    return { EC: 1, EM: "Lỗi tạo hóa đơn", data: null };
  }
};

const getInvoices = async () => {
  try {
    const invoices = await Invoice.find()
      .populate("items.menu_id", "name price category")
      .sort({ createdAt: -1 });

    return {
      EC: 0,
      EM: "Lấy danh sách hóa đơn thành công",
      data: invoices,
    };
  } catch (err) {
    return { EC: 1, EM: "Lỗi lấy hóa đơn", data: [] };
  }
};

const getInvoiceById = async (id) => {
  try {
    const invoice = await Invoice.findById(id).populate(
      "items.menu_id",
      "name price category"
    );

    if (!invoice) return { EC: 1, EM: "Không tìm thấy hóa đơn", data: null };

    return { EC: 0, EM: "Lấy hóa đơn thành công", data: invoice };
  } catch (err) {
    return { EC: 1, EM: "Lỗi lấy hóa đơn", data: null };
  }
};

module.exports = {
  createInvoice,
  getInvoices,
  getInvoiceById,
};
