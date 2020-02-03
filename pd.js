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
