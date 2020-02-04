const service = require('../service/products')

function addProducts(req,response){

    try {
        service.addProducts(req.body, function(status, message, data) {
          response.send(status, message, data, response);
        });
    } catch (exception) {
        console.log(exception)
        return response.status(400).contentType('json').send({
            status: false,
            error: 'exception'
        });
    }
}

function updateProducts(req,response){

    try {
       service.updateProducts(req.body, function(status, message, data) {
         response.send(status, message, data, response);
       });
    } catch (exception) {
       console.log(exception)
       return response.status(400).contentType('json').send({
           status: false,
           error: 'exception'
       });
    }
}

function deleteProducts(req,response) {

    try {
        service.deleteProducts(req.body, function(status, message, data) {
          response.send(status, message, data, response);
        });
    } catch (exception) {
        console.log(exception)
        return response.status(400).contentType('json').send({
            status: false,
            error: 'exception'
        });
    }
 }

function listProducts(req,response) {

     try {
         service.listProducts(req, function(status, message, data) {
           response.send(status, message, data, response);
         });
     } catch (exception) {
         console.log(exception)
         return response.status(400).contentType('json').send({
             status: false,
             error: 'exception'
         });
     }
  }

  function sendResponse(status, message, data, res) {

      if (status === 200) {

          return res.status(status).contentType('json').send({
              status: true,
              message: message,
              data: data
          });
      } else {

          return res.status(status).contentType('json').send({
              status: false,
              message: message
          });
      }
  }

 module.exports={
   addProducts: addProducts,
   updateProducts: updateProducts,
   deleteProducts: deleteProducts,
   listProducts: listProducts
 }
