const database  = require('../database/model')

// POST method to add products
function addProducts(req,callback) {

		try {

				database.con.query('INSERT INTO product_items (product_id, brand_name, product_name, qty, price)   values (("'+req.product_id+'"),("'+req.brand_name+'"),("'+req.product_name+'"),("'+req.qty+'"),("'+req.price+'"))',function(err,result) {

						let response = {}
		      	response.msg = (" An item added")
		      	callback( 200,"Success", response);
				})
		}
		catch(ex) {
				console.log(ex)
				callback(400,'error');
		}
}

// PUT method Update products
function updateProducts(req, callback) {

		try {

				let sql="UPDATE product_items SET brand_name = '"+req.brand_name+ "' WHERE product_id='"+req.product_id+"' ";
		  	database.con.query(sql, function (err, result) {
						let resonse = {}
						if(err) {
								response.msg = "error"
								callback(400,'error')
						} else {
								response.msg = ("one item updated")
								callback( 200,"Success", response);
						}
				})
		}
		catch(ex) {
				console.log(ex)
				callback(400,'error');
	  }
}

// DELETE method to delete products
function deleteProducts(req, callback) {

		try{

		  	let sql= "DELETE FROM product_items WHERE product_id  = ('"+req.product_id+"')";
		    database.con.query(sql, function (err, result) {
		    		let response = {}
						if(err){
								response.msg = "error"
								callback(400,'error');
						}  else {
								response.msg = ("one product deleted")
								callback( 200,"Success", response);
						}
				});
		}
		catch(ex) {
				console.log(ex)
				callback(400,'error');
		}
}

// GET method to list products
function listProducts(req,callback,status) {

		try {

  		  database.con.query("SELECT * from product_items", function(err,result) {
		    		let res={}
		     		if(err){
				       	res.msg = "error"
				        callback(400,'error');
		       } else {
				       products=[]
				       for (r in result) {
				         pt = {}
				         pt.product_id   = result[r].product_id;
				         pt.brand_name   = result[r].brand_name;
				         pt.product_name = result[r].product_name;
				         pt.qty     		 = result[r].qty;
				         pt.price   		 = result[r].price;
				         products.push(pt)
							 }
			       res.msg=(products)
			       callback( 200,"Success", res);
		     	 }
		  	});
		}
		catch(ex) {
				console.log(ex)
				callback(400,'error');
	  }
}

// GET method to list products details
function listProductdetails(req,callback,status) {

		try {

  		  database.con.query("SELECT * from product_items", function(err,result) {
		    		let res={}
		     		if(err){
				       	res.msg = "error"
				        callback(400,'error');
		       } else {
				       products=[]
				       for (r in result) {
				         pt = {}
				         pt.product_id   = result[r].product_id;
				         pt.brand_name   = result[r].brand_name;
				         pt.product_name = result[r].product_name;
				         pt.qty     		 = result[r].qty;
				         pt.price   		 = result[r].price;
				         products.push(pt)
							 }
			       res.msg=(products)
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
    addProducts: addProducts,
		updateProducts: updateProducts,
		deleteProducts: deleteProducts,
		listProducts: listProducts,
		listProductdetails: listProductdetails
};
