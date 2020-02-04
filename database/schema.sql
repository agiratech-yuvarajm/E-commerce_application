CREATE TABLE product_items(product_id int NOT NULL PRIMARY KEY, brand_name varchar(255),product_name varchar(255),qty int(255),price int(255));
CREATE TABLE users(user_id int NOT NULL PRIMARY KEY, user_name varchar(255), password varchar(255), mobile_no int(255), email varchar(255), address varchar(255), payment_mode varchar(255));

INSERT INTO product_items(product_id,brand_name,product_name,qty,price) VALUES (01,'apple','iphone7','1',24900);
INSERT INTO users(user_id, user_name, password, mobile_no, email, address, payment_mode ) VALUES (01,'yuvaraj100','yuvaraj123',9600001234,'yuvaraj100@gmail.com','chennai','credit_card');
