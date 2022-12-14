CREATE DATABASE IF NOT EXISTS desafio;
use desafio;

CREATE USER 'root'@'%' IDENTIFIED BY 'mypassword';
GRANT CREATE, ALTER, INDEX, LOCK TABLES, REFERENCES, UPDATE, DELETE, DROP, SELECT, INSERT ON `root`.* TO 'root'@'%';

FLUSH PRIVILEGES;