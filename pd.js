function listProducts(callback) {
		let products =[]

		try {
      database.con.query("SELECT * FROM product_items",function(err,response,result){
				if(err){
			    response.msg = "error"
			    callback(400,response)
        } else {

              for (r in result){
                let  pt = {}
                pt.product_id    = result[r].product_id;
                pt.brand_name    = result[r].brand_name;
                pt.product_name  = result[r].product_name;
                pt.qty           = result[r].qty;
                pt.price         = result[r].price;
                products.push(pt)
              }
            }
              response.msg=(products)
              // console.log(result)
							console.log(products)
              callback(200, 'Success',products);
        })
        }catch(ex) {
                console.log(ex)
                callback(400,'error');}
}






function listProducts(req,callback) {

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
		         pt.email        = result[r].email;
		         pt.address      = result[r].address;
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
