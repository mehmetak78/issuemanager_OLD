create database mydb;
use mydb;
create table student(
	id int PRIMARY KEY AUTO_INCREMENT,
    lname varchar(20),
    fname varchar(20),
    score int
);

select * from student;