CREATE DATABASE 0801_petrock
DEFAULT CHARACTER SET utf8
DEFAULT COLLATE utf8_general_ci;

USE 0801_petrock;


CREATE TABLE users (
	ID varchar(20) not null primary key,
    PW varchar(20) not null,
    name varchar(20),
    email varchar(40),
    zip_code varchar(7),
    address varchar(100),
    phone varchar(20),
    usertype tinyint(4) not null,
    regdate timestamp not null DEFAULT CURRENT_TIMESTAMP,
    update timestamp not null DEFAULT CURRENT_TIMESTAMP     );
    
    
    CREATE TABLE `product` (
  `description` varchar(2000) NOT NULL,
  `image_url` varchar(200) NOT NULL,
  `color` varchar(200) NOT NULL,
  `size` varchar(200) NOT NULL,
  `discount` int(11) NOT NULL,
  `category_id` int(11) NOT NULL,
  `create_timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `product_FK` (`category_id`),
  CONSTRAINT `product_FK` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`)
)
    CREATE TABLE product (
	id int(20) not null, 
    name varchar(100) not null,
    price int(100) unsigned not null,
    discount int(11) not null,
    
    email varchar(40),
    zip_code varchar(7),
    address varchar(100),
    phone varchar(20),
    usertype 
    regdate date );
