const controller = require('../controller/products')

module.exports = function (app, rt) {

  rt.route('/')
    .post(controller.addProducts)
    .put(controller.updateProducts)
    .delete(controller.deleteProducts)
    .get(controller.listProducts)

  rt.route('/product_details')
    .get(controller.listProductdetails)


  app.use('/api/v1/products', rt)


}
