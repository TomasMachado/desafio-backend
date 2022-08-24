# Desafio backend

API application for managing tools. Created with TypeScript and ExpressJS.



## Run server


Copy .env.local to .env and changes its variables.

**Install dependencies**

```
yarn install
```

**Run development server**

```
yarn dev
```

For data persistence in a database, a MySQL database may be used. It can be created on docker using:

```
docker run --name my-mysql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=mypassword -d mysql
```

You might need to change problems with cryptography using:

```
ALTER USER 'root'   IDENTIFIED WITH mypassword BY 'root';
flush privileges;
```


## API endpoints
After running the server, the API may be accessed at http://localhost:3000/
- GET `/api-docs` - documentation
- GET `/tools` - list all tools
- POST `/tools` - create a tool
- DELETE `/tools/:id` - delete a tool
- GET `/tools/searching?valor=?` - search for a tool by any field
