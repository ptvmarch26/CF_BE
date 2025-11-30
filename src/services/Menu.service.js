const Menu = require("../models/Menu.model");

const createMenu = async (body) => {
  try {
    const item = await Menu.create(body);

    return {
      EC: 0,
      EM: "Tạo món thành công",
      data: item,
    };
  } catch (err) {
    return { EC: 1, EM: "Lỗi tạo món", data: null };
  }
};

const getMenus = async () => {
  try {
    const items = await Menu.find().sort({ createdAt: -1 });
    return {
      EC: 0,
      EM: "Lấy danh sách menu thành công",
      data: items,
    };
  } catch (err) {
    return { EC: 1, EM: "Lỗi lấy menu", data: [] };
  }
};

const getMenuById = async (id) => {
  try {
    const item = await Menu.findById(id);

    if (!item)
      return { EC: 1, EM: "Không tìm thấy món", data: null };

    return {
      EC: 0,
      EM: "Lấy món thành công",
      data: item,
    };
  } catch (err) {
    return { EC: 1, EM: "Lỗi lấy món", data: null };
  }
};

const updateMenu = async (id, body) => {
  try {
    const item = await Menu.findByIdAndUpdate(id, body, { new: true });

    if (!item)
      return { EC: 1, EM: "Không tìm thấy món", data: null };

    return {
      EC: 0,
      EM: "Cập nhật món thành công",
      data: item,
    };
  } catch (err) {
    return { EC: 1, EM: "Lỗi cập nhật món", data: null };
  }
};

module.exports = {
  createMenu,
  getMenus,
  getMenuById,
  updateMenu,
};
