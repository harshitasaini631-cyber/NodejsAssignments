const express = require("express");
const {productModel} = require("../models/product.model");

const productRouter = express.Router();


productRouter.get("/read", async (req, res) => {
  try {

    const {
      category,
      sort,
      page = 1,
      limit = 10
    } = req.query;


    // Filtering
    const filter = {};

    if (category) {
      filter.category = category;
    }


    // Pagination
    const skip = (page - 1) * limit;


    // Get products
    const products = await productModel
      .find(filter)
      .sort(sort ? { [sort]: 1 } : {})
      .skip(skip)
      .limit(Number(limit));


    // Total number of products
    const total = await productModel.countDocuments(filter);


    // Total pages
    const totalPages = Math.ceil(total / limit);


    res.send({
      total: total,
      page: Number(page),
      totalPages: totalPages,
      count: products.length,
      products: products
    });

  } catch (error) {

    console.log(error);

    res.send({
      msg: "Something went wrong",
      error: error.message
    });

  }
});

// GET: Low stock products
productRouter.get("/low-stock", async (req, res) => {
  try {
    const products = await productModel.find({
      $expr: {
        $lte: ["$quantity", "$reorderLevel"]
      }
    });

    res.send({
      count: products.length,
      lowStockItems: products
    });

  } catch (error) {
    console.log(error);

    res.status(500).send({
      msg: "Something went wrong",
      error: error.message
    });
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