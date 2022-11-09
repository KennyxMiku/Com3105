############################
### Node.js with MySQL use com3105 database
### hans yip 2021/7/11
### Create tables for com3105 class
### TO RUN this script: 
### 0. start mysql: go to cmd as Administrator, enter 'net start mysql80'
### 1. Logon to MySQL monitor: mysql -u user99 -p user99  
### 2. use com3105
### 3. source or \. c:/mysql_workspace/com3105/22_create_db_table/create_scm_table.sql
### 4. stop mysql: go to cmd as Administrator, enter 'net stop mysql80'
############################

use com3105;

###################################
### po: po_num, po_date, prod_id, supplier_id 
###
###################################

DROP TABLE po;

CREATE TABLE po (
po_num INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
po_date date NOT NULL,
prod_id INT NOT NULL,
supplier_id INT NOT NULL
);

#################################
### Then, write and execute scm.js
### 
#################################

