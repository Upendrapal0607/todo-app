# Project Title
  TODO APP
## Introduction
This is a todo app that allow to create todo and make your work esiast way from using this todo app.It will help you to manage your daily rootine and task.
## Project Type
It is a Fullstack project

## Deplolyed App
Frontend: https://stirring-dragon-4127a8.netlify.app/
Backend: https://dream-park-backend.onrender.com/

## Directory Structure
TODO_APP/
├─ backend/
|  |--index.js
|  |--db
|  |  |--db.js
|  |--Route
|  |  |--todo.route.js
|  |--Model
|  |  |--todo.model.js
|  |--.env
|  | ...
|
├─ todo-app(ront-end)/
│  ├─public/
|  ├─node_modules/
|  ├─src/
|    |--Componants/
|       |--Todo.jsx
|       |--TodoList.jsx
|       |--TodoInput.jsx
|  |--Controller/
|     |--controller.js
|  |...
|

## Video Walkthrough of the project
  ###  Link- ```https://drive.google.com/file/d/15tcrvRB-mjvQqo0iiqEAlDuhrUxfsbAG/view?usp=sharing```
## Video Walkthrough of the codebase
  #### Link- ```https://drive.google.com/file/d/19PO0f-jarebqbKLU_aELFSxVBvuDXOj6/view?usp=sharing```

## Installation & Getting started
Detailed instructions on how to install, configure, and get the project running. For BE/FS projects.
### Frontend
Locally it will run:- ````http://localhost:3000/```
```bash
clone git clone  https://github.com/Upendrapal0607/todo-app.git
cd todo-app
npm install
npm start
```

### Backend
Locally it will run:- ````http://localhost:8080/```
```bash
clone same repo for backend
cd back-end
npm install
npm npm run server
```
### Database
.env file have variable:
MongoDB_URL = mongodb+srv://upendra:pal@cluster0.2tt1hjg.mongodb.net/TodoData?retryWrites=true&w=majority
you have to add it for make connection with the server

## Usage
This is a todo app that allow to create todo and make your work esiast way from using this todo app.It will help you to manage your daily rootine and task.

## API Endpoints
GET /todo/ - retrieve all items
POST /todo/add - create a new item
PATCH /todo/update/:todoId
DELETE /todo/delete/:todoId

## Technology Stack
- Node.js
- Express.js
- MongoDB
- React.js
- Other libraries/modules