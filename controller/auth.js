require("dotenv").config();
const User = require("../models/users");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

exports.Register = async (req, res) => {
  try {
    const { username, password, isSeller } = req.body;
    if (!username || !password || isSeller === null || isSeller === "") {
      throw 400;
    } else {
      const CheckUser = await User.findOne({ username });
      if (CheckUser) {
        throw 409;
      } else {
        const hash = bcrypt.hashSync(password, 10);
        const Userdata = new User({
          username,
          password: hash,
          isSeller
        });
        const savedUser = await Userdata.save();
        const token = jwt.sign(
          {
            user_id: savedUser.id,
            user_name: savedUser.name
          },
          process.env.SECRET_KEY
        );

        res.status(201).send({
          status: true,
          message: "Register Success",
          data: { username, token }
        });
      }
    }
  } catch (err) {
    switch (err) {
      case 409:
        res
          .status(409)
          .send({ status: false, message: "Username Already Registered" });
      case 400:
        res.status(400).send({ status: false, message: "Some Field is Empty" });
      default:
        break;
    }
  }
};

exports.Login = async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      throw 400;
    } else {
      const CheckUser = await User.findOne({ username });
      if (!CheckUser) {
        throw 404;
      } else {
        const check = bcrypt.compareSync(password, CheckUser.password);
        if (!check) {
          throw 401;
        } else {
          const token = jwt.sign(
            {
              user_id: CheckUser.id,
              user_name: CheckUser.name
            },
            process.env.SECRET_KEY
          );
          res.status(200).send({
            status: true,
            message: "Login Success",
            data: { username, token }
          });
        }
      }
    }
  } catch (err) {
    switch (err) {
      case 404:
        res.status(404).send({ status: false, message: "Username Not Found" });
      case 400:
        res.status(400).send({ status: false, message: "Some Field is Empty" });
      case 401:
        res
          .status(401)
          .send({ status: false, message: "Invalid Username or Password" });
      default:
        break;
    }
  }
};
