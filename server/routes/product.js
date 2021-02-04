const express = require("express");
const router = express.Router();

const { create, productById, read } = require("../controllers/product.js");
const { requireSignin, isAdmin, isAuth } = require("../controllers/auth.js");
const { userById } = require("../controllers/user.js");

router.get("/product/:productId", read);
router.post("/product/create/:userId", requireSignin, isAdmin, isAuth, create);

router.param("userId", userById);
router.param("productId", productById);

module.exports = router;
