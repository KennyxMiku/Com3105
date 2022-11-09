############################
### Node.js with MySQL use nodejs database
### hans yip 2020/11/7
### Create com3105 database for COM3105 class
### TO RUN this script: 
### 0. start mysql: go to cmd as Administrator, enter 'net start mysql80'
### 1. Logon to MySQL monitor: mysql -u root -p root  
### 2. source or \. c:/mysql_workspace/com3105/11_create_user/create_user.sql
### 3. stop mysql: go to cmd as Administrator, enter 'net stop mysql80'
############################

CREATE USER 'user99'@'localhost' IDENTIFIED BY 'user99';

GRANT ALL ON *.* TO 'user99'@'localhost';

ALTER USER 'user99'@'localhost' IDENTIFIED WITH mysql_native_password BY 'user99';

flush privileges;