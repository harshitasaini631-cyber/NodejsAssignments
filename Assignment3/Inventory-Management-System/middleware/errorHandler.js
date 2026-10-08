const errorHandler = (err, req, res, next) => {
    res.send({
        msg: "Something went wrong"
    });
};

module.exports = { errorHandler };