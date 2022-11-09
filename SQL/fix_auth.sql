############################
### To fix authentication problem
### Error: ER_NOT_SUPPORTED_AUTH_MODE:
### hans yip 2020/11/7
### 
### TO RUN this script: 
### 1. Logon to MySQL monitor: mysql -uroot -proot  
### 2. source c:/mysql_workspace/fix_auth.sql
############################

ALTER USER 'user99'@'localhost' IDENTIFIED WITH mysql_native_password BY 'user99';

flush privileges;
