select * from mysql.user;

create user issmngr@localhost identified by 'issmngr';
grant all privileges on issmngr.* to issmngr@localhost;
ALTER USER 'issmngr'@localhost IDENTIFIED WITH mysql_native_password BY 'issmngr';