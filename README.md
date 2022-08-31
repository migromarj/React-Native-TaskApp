# React-Native TaskApp 

#### React Native application that allows you to save the different pending tasks and delete them once they are done.
#### App idea taken from [Fazt's YouTube video](https://www.youtube.com/watch?v=HMKVnwlhJO0&list=PLX5Rq0t9ahrJPeHdRHA4GC-4jyaRHdtFT&index=21).

## Running TaskApp locally

### Prerequisites
The following items should be installed in your system:

* Node.js
* MariaDB
* HeidiSQL 

  * It must have a connection that has permission to perform all actions (EXECUTE, SELECT, ...), got the following query:
  
  ```
  CREATE DATABASE tasksdb;
  USE tasksdb;
  
  CREATE TABLE IF NOT EXISTS tasks(
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(100) NOT NULL,
    description TEXT,
    PRIMARY KEY (id)
  );
  ```
  
* git command line tool (https://help.github.com/articles/set-up-git)

### Steps:

On the command line:

```
git clone https://github.com/migromarj/React-Native-TaskApp.git
cd React-Native-TaskApp
```

In the 'backend' folder, a file called '.env' should be created, with the following content:

```
DB_HOST = localhost
DB_USER = user
DB_PASSWORD = password
DB_DATABASE = tasksdb
```

'user' and 'password' must be, respectively, the username and password of the user created in the database.

Once this is done in the command line where the project was cloned:

```
cd backend
npm run build
npm start
```

On another command line, open inside the project folder:

```
cd taskapp
npm start
```

Press 'a' to open in android or 'w' to open in web.

## App images

<div class="row" align="center">
  <img width="300" alt="Home screen" src="https://github.com/migromarj/Readme-Images/blob/master/React-Native-TaskApp/HomeScreen.PNG">
  <img width="301" alt="Task form screen" src="https://github.com/migromarj/Readme-Images/blob/master/React-Native-TaskApp/TaskFormScreen.PNG">
  <img width="303" alt="Updating task screen" src="https://github.com/migromarj/Readme-Images/blob/master/React-Native-TaskApp/UpdatingTask.PNG">
  
</div>
