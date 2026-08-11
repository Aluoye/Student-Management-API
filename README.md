# Student Management REST API

## Description
A Node.js REST API built with Express. Uses a JavaScript Array as an in-memory database.
Implements full CRUD operations for student records.

## How to Run
1.  Clone the repo
2.  Run npm install express
3.  Run node server.js
4.  Server runs on http://localhost:7000

## API Endpoints
| Method | Endpoint | Description |
| --- | --- | --- |
| POST | /students | Create a new student |
| GET | /students | Get all students |
| GET | /students/:id | Get student by ID |
| PUT | /students/:id | Update student by ID |
| DELETE | /students/:id | Delete student by ID |
