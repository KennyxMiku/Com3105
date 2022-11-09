############################
### Node.js with MySQL use nodejs database
### hans yip 2021/7/11
### Describe customer table in com3105 database
### display autocommit (0 is off, 1 is on)
### TO RUN this script: 
### 0. start mysql: go to cmd as Administrator, enter 'net start mysql80'
### 1. Logon to MySQL monitor: mysql -u user99 -p 
### PASSWORD: user99  
### 2. source \. c:/mysql_workspace/com3105/33_sql/query_customer_table.sql
### 3. stop mysql: go to cmd as Administrator, enter 'net stop mysql80'
############################

use com3105;
desc customer;

SELECT *
FROM customer;

select @@autocommit as 'autocommit';