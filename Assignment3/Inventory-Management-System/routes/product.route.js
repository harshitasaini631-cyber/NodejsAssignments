const express = require("express");
const {productModel} = require("../models/product.model");

const productRouter = express.Router();


productRouter.get("/read", async (req, res) => {
  try {
    const products = await productModel.find();

    res.send(products);
  } catch (error) {
    res.send({ msg: "Something went wrong" });
  }
});


productRouter.get("/read/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const product = await productModel.findById(id);

    res.send(product);
  } catch (error) {
    res.send({ msg: "Something went wrong" });
  }
});

productRouter.post("/create", async (req, res) => {
  try {
    const payload = req.body;

    const newProduct = new productModel(payload);

    await newProduct.save();

    res.send({
      msg: "Product created successfully"
    });
  } catch (error) {
    console.log(error);

    res.send({
      msg: "Something went wrong",
      error: error.message
    });
  }
});


productRouter.put("/update/:id", async (req, res) => {
  const { id } = req.params;

  const payload = req.body;

  try {
    await productModel.findByIdAndUpdate(
      { _id: id },
      payload
    );

    res.send({
      msg: "Product updated successfully"
    });

  } catch (error) {
    res.send({
      msg: "Something went wrong"
    });
  }
});


productRouter.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;

  try {
    await productModel.findByIdAndDelete(id);

    res.send({
      msg: "Product deleted successfully"
    });

  } catch (error) {
    res.send({
      msg: "Something went wrong"
    });
  }
});

module.exports = { productRouter };