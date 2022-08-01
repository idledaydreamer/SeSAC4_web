-- CREATE DATABASE sesac;
USE sesac;

CREATE TABLE user (
	ID varchar(10) not null primary key,
    pw varchar(20) not null,
    name varchar(5) not null,
    gender ENUM('F','M','') default '',
    birthday date not null,
    age int(3) not null default 0
);

INSERT INTO user (id,pw,name,gender,birthday,age) VALUES
('hong1234', '8o4bkg', '홍길동', 'M', '1990-01-31',33),
('sexysung', '87awjkdf', '성춘향', 'F', '1992-03-31',31),
('power70', 'qxur8sda', '변사또', 'M', '1970-05-02',53),
('hanjo', 'jk48fn4', '한조', 'M', '1984-10-18',39),
('widowmaker', '38ewifh3', '위도우', 'F', '1976-06-27',47),
('dvadva', 'k3f3ah', '송하나', 'F', '2001-06-03',22),
('jungkrat', '4ifha7f', '정크랫', 'M', '1999-11-11',24);

SELECT * FROM user;

SELECT * FROM user ORDER BY birthday ASC;

SELECT * FROM user WHERE gender = 'M' ORDER BY name DESC;

SELECT id, name FROM user WHERE birthday LIKE '199_-__-__';

SELECT * FROM user WHERE birthday LIKE '____-06-__' ORDER BY birthday ASC;

SELECT * FROM user WHERE gender = 'M' AND birthday LIKE '197_-__-__';

SELECT * FROM user ORDER BY age DESC LIMIT 3;

SELECT * FROM user WHERE age BETWEEN 25 AND 50;

UPDATE user SET pw=12345678 WHERE id='hong1234';

DELETE FROM user WHERE id='jungkrat';

