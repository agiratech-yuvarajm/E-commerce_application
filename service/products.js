const database  = require('../database/model')

// POST method to add products
function addProducts(req,callback,status) {

		try {

      console.log(req)
      database.con.query('INSERT INTO product_items (product_id, brand_name, product_name, qty, price)   values (("'+req.product_id+'"),("'+req.brand_name+'"),("'+req.product_name+'"),('+req.qty+'),('+req.price+'))',function(err,result){

			    let res={}
          console.log("one item added");
          res.msg = (" An item added")
          callback( 200,"Success");
        })
  		}
			catch(ex) {
		      console.log(ex)
		      callback(400,'error');
				}
		}

// PUT method Update products
function updateProducts(req,callback,status){
	try {

		let sql="UPDATE product_items SET brand_name = ('"+req.brand_name+ "') WHERE product_id=('"+req.product_id+"') ";
	  database.con.query(sql, function (err, result) {
	    let res={}
	     if(err){
	       res.msg = "error"
	       callback(400,'error')
	         }else{
	         console.log("one item updated");
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

		try{

		  let sql= "DELETE FROM product_items WHERE product_id  = ('"+req.product_id+"')";
		    database.con.query(sql, function (err, result) {
		      var res={}
		       if(err){
		         res.msg = "error"
		         callback(400,'error');
		           }else{
		           console.log("one product deleted");
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

		try {

  		  database.con.query("SELECT * from product_items", function(err,result) {
		    let res={}
		     if(err){
		       res.msg = "error"
		        callback(400,'error');
		       } else {
		       products=[]
		       for (r in result){
		         pt = {}
		         pt.product_id   = result[r].product_id;
		         pt.brand_name   = result[r].brand_name;
		         pt.product_name = result[r].product_name;
		         pt.qty     		 = result[r].qty;
		         pt.price   		 = result[r].price;
		         products.push(pt)
		       }
		       res.msg=(products)
					 console.log(products)
		       callback( 200,"Success");
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
		listProducts: listProducts
};
