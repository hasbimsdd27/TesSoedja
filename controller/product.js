const { calculateLimitAndOffset, paginate } = require("paginate-info");
const Products = require("../models/products");
exports.addProducts = async (req, res) => {
  try {
    const { name, description, price } = req.body;
    if (!name || !description || !price) {
      throw 400;
    } else {
      const Productdata = new Products({
        name,
        description,
        price
      });
      const savedProduct = await Productdata.save();
      res.status(201).send({
        status: true,
        message: "Product Added",
        data: savedProduct
      });
    }
  } catch (err) {
    switch (err) {
      case 400:
        res.status(400).send({ status: false, message: "Some Field is Empty" });
      default:
        break;
    }
  }
};

exports.getAll = async (req, res) => {
  const { currentPage, pageSize } = req.query;
  try {
    const count = await Products.estimatedDocumentCount();
    const { limit, offset } = calculateLimitAndOffset(currentPage, pageSize);
    const rows = await Products.find({})
      .limit(limit)
      .skip(offset);
    const meta = paginate(currentPage, count, rows, pageSize);
    res
      .status(200)
      .send({ status: true, message: "Get All Data Success", rows, meta });
  } catch (err) {}
};
