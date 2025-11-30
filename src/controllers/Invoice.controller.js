const invoiceService = require("../services/Invoice.service");

const createInvoice = async (req, res) => {
  try {
    const result = await invoiceService.createInvoice(req.body);

    return result.EC === 0
      ? res.success(result.data, result.EM)
      : res.error(result.EC, result.EM);
  } catch (err) {
    return res.InternalError();
  }
};

const getInvoices = async (req, res) => {
  try {
    const result = await invoiceService.getInvoices();

    return result.EC === 0
      ? res.success(result.data, result.EM)
      : res.error(result.EC, result.EM);
  } catch (err) {
    return res.InternalError();
  }
};

const getInvoiceById = async (req, res) => {
  try {
    const result = await invoiceService.getInvoiceById(req.params.id);

    return result.EC === 0
      ? res.success(result.data, result.EM)
      : res.error(result.EC, result.EM);
  } catch (err) {
    return res.InternalError();
  }
};

module.exports = {
  createInvoice,
  getInvoices,
  getInvoiceById,
};
