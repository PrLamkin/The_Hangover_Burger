DROP DATABASE IF EXISTS burger_db;

create database burger_db;
use burger_db;

create table burger(
id int not null auto_increment,
burger_name varchar(500) not null,
devoured boolean not null default 0,
createdAt timestamp not null,
primary key (id)
);