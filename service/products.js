const database  = require('../database/model')
// POST method to add products
function addProducts(req,callback,status) {

		try {

				if (!req.category_id) throw new Error('category_id missing')
				if (!req.product_id) throw new Error('product_id missing')
				if (!req.product_brand_name) throw new Error('product_brand_name missing')
				if (!req.product_id) throw new Error('product_name missing')
				if (!req.qty) throw new Error('qty missing')
				if (!req.product_id) throw new Error('price missing')

				database.con.query('INSERT INTO product_items (category_id, category_name, product_id, product_brand_name, product_name, qty, price, warranty, seller_name, rating) values (("'+req.category_id+'"),("'+req.category_name+'"),("'+req.product_id+'"),("'+req.product_brand_name+'"),("'+req.product_name+'"),("'+req.qty+'"),("'+req.price+'"),("'+req.warranty+'"),("'+req.seller_name+'"),("'+req.rating+'"))',function(err ,result) {
						let response = {}
						if(err) {
								response.msg = ("err")
								console.log(err)
								callback( 400,"error");
						} else {
								response.msg = ("item added")
								callback( 200,"Success", response);
						}
				})
		}
		catch(ex) {
				console.log(ex)
				callback(400,'error');


      database.con.query('INSERT INTO product_items (product_id, brand_name, product_name, qty, price)   values (("'+req.product_id+'"),("'+req.brand_name+'"),("'+req.product_name+'"),('+req.qty+'),('+req.price+'))',function(err,result){

			    let res={}
		      res.msg = (" An item added");
		      callback( 200,"Success");
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

				if (!req.product_brand_name) throw new Error('brand_name missing')
				if (!req.product_id) throw new Error('product_id missing')

				let sql="UPDATE product_items SET product_brand_name = '"+req.product_brand_name+ "' WHERE product_id='"+req.product_id+"' ";

					database.con.query(sql, function (err, result) {
						let response = {}
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
						if(err) {
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
function listProducts(req,callback) {

		try {

					database.con.query("SELECT * from product_items", function(err,result) {
							let response={}
			     		if(err){
					       	response.msg = "error"
					        callback(400,'error');
			       		} else {
					       	products=[]
					       	for (r in result) {
											pt = {}
											pt.product_id   = result[r].product_id;
											pt.brand_name   = result[r].brand_name;
											pt.product_name = result[r].product_name;
											pt.qty     		  = result[r].qty;
											pt.price   		  = result[r].price;
											products.push(pt)
								}
			       	response.msg=(products)
			       	callback( 200,"Success", response);
							}
		  		});
		}
		catch(ex) {
				console.log(ex)
				callback(400,'error');
	  }
}

function updateProducts(req,callback,status){
	try {
			if (!req.brand_name) throw new Error('brand_name missing')
			if (!req.product_id) throw new Error('product_id missing')

			let sql="UPDATE product_items SET brand_name = ('"+req.brand_name+ "') WHERE product_id=('"+req.product_id+"') ";
		  database.con.query(sql, function (err, result) {
		    let res={}
		     if(err){
			       res.msg = "error"
			       callback(400,'error')
		         } else {
			         		res.msg = ("one item updated")
				         	callback( 200,"Success");
		       	}
	      })

	   }
		 catch(ex) {
	      console.log(ex)
       	callback(400,'error');
	  }
}

function deleteProducts(req,callback,status){

		try {
			if (!req.product_id) throw new Error('product_id missing')

		  let sql= "DELETE FROM product_items WHERE product_id  = ('"+req.product_id+"')";
	    		database.con.query(sql, function (err, result) {
  						var res = {}
				       if(err){
					         res.msg = "error"
					         callback(400,'error');
				           } else {
						           res.msg = ("one product deleted")
						           callback( 200,"Success");
				         }
							 });

				    } catch(ex) {
				        console.log(ex)
				        callback(400,'error');
				    }
				}



function listProducts(req,callback,status) {


  		  database.con.query("SELECT * from product_items", function(err,result) {
		    		let response={}
		     		if(err){
				       	response.msg = "error"
				        callback(400,'error');
					} else {
						products=[]
				       	for ( r in result ) {
							pt = {}
							pt.product_id   = result[r].product_id;
							pt.brand_name   = result[r].brand_name;
		         	pt.product_name = result[r].product_name;
		         	pt.qty     		  = result[r].qty;
		         	pt.price   		  = result[r].price;
		         	products.push(pt)
						}
					response.msg=(products)
			       	callback( 200,"Success", response);
		     	 }
		  	});

		try {
			  database.con.query("SELECT * from product_items", function(err,result) {

			  let res = {}
	     	if(err){
				   	res.msg = "error"
				    callback(400,'error');
		        } else {
		       			products = []
					     	for (r in result){
							       pt = {}
							       pt.product_id   = result[r].product_id;
							       pt.brand_name   = result[r].brand_name;
							       pt.product_name = result[r].product_name;
							       pt.qty     		 = result[r].qty;
							       pt.price   		 = result[r].price;
							       products.push(pt)
					       }
				     }
						 	callback( 200,"Success",products);
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
		listProducts: listProducts
};
