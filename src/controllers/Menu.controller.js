const menuService = require("../services/Menu.service");

const createMenu = async (req, res) => {
  try {
    const result = await menuService.createMenu(req.body);

    return result.EC === 0
      ? res.success(result.data, result.EM)
      : res.error(result.EC, result.EM);

  } catch (err) {
    return res.InternalError();
  }
};

const getMenus = async (req, res) => {
  try {
    const result = await menuService.getMenus();

    return result.EC === 0
      ? res.success(result.data, result.EM)
      : res.error(result.EC, result.EM);

  } catch (err) {
    return res.InternalError();
  }
};

const getMenuById = async (req, res) => {
  try {
    const result = await menuService.getMenuById(req.params.id);

    return result.EC === 0
      ? res.success(result.data, result.EM)
      : res.error(result.EC, result.EM);

  } catch (err) {
    return res.InternalError();
  }
};

const updateMenu = async (req, res) => {
  try {
    const result = await menuService.updateMenu(req.params.id, req.body);

    return result.EC === 0
      ? res.success(result.data, result.EM)
      : res.error(result.EC, result.EM);

  } catch (err) {
    return res.InternalError();
  }
};

module.exports = {
  createMenu,
  getMenus,
  getMenuById,
  updateMenu,
};
