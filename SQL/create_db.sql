############################
### Node.js with MySQL use com3105 database
### hans yip 2021/7/11
### Create com3105 database for COM3105 class
### TO RUN this script: 
### 0. start mysql: go to cmd as Administrator, enter 'net start mysql80'
### 1. Logon to MySQL monitor: mysql -uuser99 -puser99 (or use root/root)  
### 2. source or \. c:/mysql_workspace/com3105/22_create_db_table/create_db.sql
### Use user99 to create the database and table, therefore user99 is the owner
### 3. stop mysql: go to cmd as Administrator, enter 'net stop mysql80'
############################


CREATE DATABASE com3105;