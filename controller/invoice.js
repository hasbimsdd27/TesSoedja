const Invoices = require("../models/invoices");

function makeInvoice(length) {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

exports.addInvoice = async (req, res) => {
  try {
    const { product_list, total_price } = req.body;
    if (!product_list || !total_price) {
      throw 400;
    } else {
      const InvoiceData = new Invoices({
        status: "pending",
        product_list,
        total_price,
        invoice: makeInvoice(10)
      });
      const savedInvoice = await InvoiceData.save();
      res.status(201).send({
        status: true,
        message: "Invoice Created",
        data: InvoiceData
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

exports.payInvoice = async (req, res) => {
  try {
    const { invoice, status } = req.body;
    if (!invoice || !status) {
      throw 400;
    } else {
      await Invoices.findOneAndUpdate(invoice, { status });
      const data = await Invoices.findOne({ invoice });
      res.status(200).send({
        status: true,
        message: "Invoice Paid",
        data
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
