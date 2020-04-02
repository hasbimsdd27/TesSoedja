const jwt = require("jsonwebtoken");
const User = require("../models/users");

exports.authMiddleware = async (req, res, next) => {
  try {
    if (!req.header("Authorization")) {
      throw 401;
    } else {
      const token = req.header("Authorization").replace("Bearer ", "");
      const data = jwt.verify(token, process.env.SECRET_KEY);
      const user = await User.findById(data.user_id);
      if (!user) {
        throw 404;
      } else {
        req.user = user.id;
        next();
      }
    }
  } catch (err) {
    switch (err) {
      case 401:
        res
          .status(401)
          .send({ message: "Not authorized to access this resource" });
      case 404:
        res.status(404).send({ message: "User Not Found" });

      default:
        break;
    }
  }
};

exports.authMiddlewareSeller = async (req, res, next) => {
  try {
    if (!req.header("Authorization")) {
      throw 401;
    } else {
      const token = req.header("Authorization").replace("Bearer ", "");
      const data = jwt.verify(token, process.env.SECRET_KEY);
      const user = await User.findById(data.user_id);
      if (!user) {
        throw 404;
      } else if (!user.isSeller) {
        throw 401;
      } else {
        req.user = user.id;
        next();
      }
    }
  } catch (err) {
    switch (err) {
      case 401:
        res.status(401).send({
          status: false,
          message: "Not authorized to access this resource"
        });
      case 404:
        res.status(404).send({ status: false, message: "User Not Found" });
      default:
        break;
    }
  }
};
