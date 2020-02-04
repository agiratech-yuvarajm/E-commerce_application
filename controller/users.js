
//const ct  = require('../routes/users')
const service = require('../service/users')

function addUsers(req,response) {

    try {
        service.addUsers(req.body, function(status, message, data) {
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

function listUsers(req,response) {

    try {
        service.listUsers(req, function(status, message, data) {
          sendResponse(status, message, data, response);
        });
    } catch (exception) {
        console.log(exception)
        return response.status(400).contentType('json').send({
            status: false,
            error: 'exception'
        });
    }
}

function updateUsers(req,response) {

    try {
        service.updateUsers(req.body, function(status, message, data) {
          sendResponse(status, message, data, response);
        });
    } catch (exception) {
        console.log(exception)
        return response.status(400).contentType('json').send({
            status: false,
            error: 'exception'
        });
    }
}

function deleteUsers(req,response) {

    try {
        service.deleteUsers(req.body, function(status, message, data) {
          sendResponse(status, message, data, response);
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

 module.exports= {
   addUsers: addUsers,
   listUsers: listUsers,
   updateUsers: updateUsers,
   deleteUsers: deleteUsers
 }
