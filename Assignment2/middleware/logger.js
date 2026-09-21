const logger = (req, res, next)=>{
    const startTime = Date.now();
    next();
    const endTime = Date.now();

    console.log(`Time taken to route is ${endTime - startTime}ms`);
}
// app.use(timeLogerMiddlewere)

module.exports = logger;