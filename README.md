# Desafio backend

#### API for code challenge

## Run server

**Install dependencies**

```
yarn install
```

**Run development server**

```
yarn dev
```

You will also need a MySql database. It can be created on docker using:

```
docker run --name my-mysql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=mypassword -d mysql
```

You might need to change problemas with cryptography using:

```
ALTER USER 'root'   IDENTIFIED WITH mypassword BY 'root';
flush privileges;
```
