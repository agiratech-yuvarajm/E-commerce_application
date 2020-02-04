const database  = require('../database/model')

// POST method to add products
function addUsers(req,callback,status) {
	//	console.log("hi")
		try {
			//console.log("test")
      database.con.query('INSERT INTO users(user_id, user_name, password, mobile_no, email, address, payment_mode ) VALUES (("'+req.user_id+'"),("'+req.user_name+'"),("'+req.password+'"),('+req.mobile_no+'),('+req.address+'),('+req.payment_mode+'))',function(err,result) {

			    let res={}

          res.msg = ("one user added")
					console.log(res.msg)
          callback(res);
        })
  		}
			catch(ex) {
		      console.log(ex)
		      callback(400,'error');
				}
		}

		function listUsers(req, callback) {
			console.log("yuvi")
				try {

		  		  database.con.query("SELECT * from users", function(err,result) {
				    let res={}
				     if(err){
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
				       res.data=(users)
							 console.log(users)
				       callback(res);
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
		listUsers: listUsers

};
