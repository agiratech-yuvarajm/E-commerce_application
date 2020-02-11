const controller = require('../controller/products')

module.exports = function (app, rt) {

  rt.route('/v1/products')
    .post(controller.addProducts)
    .put(controller.updateProducts)
    .delete(controller.deleteProducts)
    .get(controller.listProducts)

  rt.route('/v1/products/product_details')
    .get(controller.listProductdetails)


  app.use('/api', rt)


}
