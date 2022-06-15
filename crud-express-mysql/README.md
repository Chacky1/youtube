# crud-express-mysql

This project is more for a personal use.
It allows me to check whether I have the skills to develop a CRUD REST API project with Typescript / Express / MySQL stack.
It will be helpful also for future use.

## How to launch project locally

- Create a MySQL docker container on the computer
```bash
docker run --name mysql-express-app -d --env MYSQL_ROOT_PASSWORD=my-secret-pw -p 3310:3306 mysql:latest
```

- Create a Database and a table *thing* which is used for the CRUD
```bash
docker exec -it mysql-express-app mysql -u root -p
```
```sql
CREATE DATABASE express_app;
USE express_app;
CREATE TABLE thing (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(150) NOT NULL
);
```

- Fill a new `.env` file following the structure of the `.env.sample` file
- Install all libraries with `npm install`
- You are ready to go !