drop table if exists tbl_users;
drop table if exists tbl_emails;

create table tbl_users (id serial, name varchar(255) not null, born_date date not null, primary key(id));

insert into tbl_users (name, born_date) values ('Huguinho', now());
insert into tbl_users (name, born_date) values ('Zezinho', now());
insert into tbl_users (name, born_date) values ('Luizinho', now());

select * from tbl_users;

create table tbl_emails (id serial, adress varchar(255) not null, user_id int, constraint fk_users foreign key(user_id) references tbl_users(id), primary key(id));

insert into tbl_emails (adress, user_id) values ('Huguinho@gmail.com', 1);
insert into tbl_emails (adress, user_id) values ('Zezinho@gmail.com', 2);
insert into tbl_emails (adress, user_id) values ('Luizinho@gmail.com', 3);

select * from tbl_emails;