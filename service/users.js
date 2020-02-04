const database  = require('../database/model')

// POST method to add products
function addUsers(req,callback,status) {

		try {

	      database.con.query('INSERT INTO users (user_id, user_name, password, mobile_no, email, address, payment_mode) values (("'+req.user_id+'"),("'+req.user_name+'"),("'+req.password+'"),("'+req.mobile_no+'"),("'+req.email+'"),("'+req.address+'"),("'+req.payment_mode+'"))', function(err,result) {

				    let res={}
	          res.msg = (" one item added")
	          callback( 200,"Success",res);
	        })
		}
		catch(ex) {
	      console.log(ex)
	      callback(400,'error');
		}
}

// GET method to list products
function listUsers(req, callback) {

		try {

			  database.con.query("SELECT * from users", function(err,result) {

		    		let res={}
						if(err) {
								res.msg = "error"
								callback(400,'error');
								} else {
								users=[]
								for (r in result){
										pt = {}
										pt.user_id      = result[r].user_id;
										pt.user_name    = result[r].user_name;
										pt.mobile_no    = result[r].mobile_no;
										pt.email     	 = result[r].email;
										pt.address   	 = result[r].address;
										pt.payment_mode = result[r].payment_mode;
										users.push(pt)
								}
								res.users=(users)
								callback(200,'success',res);
								}
						});
		}
		catch(ex) {
				console.log(ex)
				callback(400,'error');
		}
}

// PUT method to update users
function updateUsers(req,callback,status) {

		try {

				let sql= "UPDATE users SET address = ('"+req.address+ "') WHERE user_id=('"+req.user_id+"') ";
			  database.con.query(sql, function (err, result) {

						let res={}
				    		if(err)  {
				       	res.msg = "error"
				       	callback(400,'error')
				        } else {
				        res.msg = ("one item updated")
				        callback( 200,"Success", res);
				       	}
			      })
		}
	  catch(ex) {
				console.log(ex)
     		callback(400,'error');
		}
}

// DELETE method to delete users
function deleteUsers(req,callback,status) {

		try{

				let sql= "DELETE FROM users WHERE user_id  = ('"+req.user_id+"')";
		    database.con.query(sql, function (err, result) {

		  			var res={}
						if(err) {
								res.msg = "error"
								callback(400,'error');
								} else {
								res.msg = ("user deleted")
								callback( 200,"Success", res);
								}
				});

		}
		catch(ex) {
		    console.log(ex)
		    callback(400,'error');
		}
}

// Export methods
module.exports = {
    addUsers: addUsers,
		listUsers: listUsers,
		updateUsers: updateUsers,
		deleteUsers: deleteUsers

};
