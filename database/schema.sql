CREATE TABLE users(user_id int NOT NULL PRIMARY KEY, user_name varchar(255), password varchar(255), mobile_no int(255), email varchar(255), address varchar(255), payment_mode varchar(255));
CREATE TABLE product_items(category_id int(255), category_name varchar(255), product_id int NOT NULL PRIMARY KEY, product_brand_name varchar(255), product_name varchar(255), qty int(255), price varchar(255),warranty varchar(255), seller_name varchar(255),rating int(255));



INSERT INTO product_items (category_id, category_name, product_id, product_brand_name, product_name, qty, price, warranty, seller_name,rating) VALUES (01,'electronics','9','samsung','samsung 4K TV', 5, 'RS 59999','1 year','abc','4');
INSERT INTO users(user_id, user_name, password, mobile_no, email, address, payment_mode ) VALUES (02,'yuvaraj100','yuvaraj123',960,'yuvaraj100@gmail.com','chennai','credit_card');
UPDATE users SET address = 'bangalore' WHERE user_id= 2;








INSERT INTO product_items (category_id, category_name, product_id, product_brand_name, product_name, qty, price, warranty, seller_name, rating) values (3,"electronics",1,"xyz","abc",1,"rs 5000","1 year","xyz",5);
