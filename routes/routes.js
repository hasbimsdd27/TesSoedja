const express = require("express");
const router = express.Router();
const { Register, Login } = require("../controller/auth");
const { addProducts, getAll } = require("../controller/product");
const { addInvoice, payInvoice } = require("../controller/invoice");
const {
  authMiddleware,
  authMiddlewareSeller
} = require("../middleware/authMiddleware");

router.get("/test", (req, res) => res.send("OK"));
router.post("/users/register", Register);
router.post("/users/login", Login);
router.post("/products/new", authMiddlewareSeller, addProducts);
router.post("/invoices/inq", authMiddleware, addInvoice);
router.patch("/invoices/pay", authMiddleware, payInvoice);
router.get("/products", getAll);
module.exports = router;
