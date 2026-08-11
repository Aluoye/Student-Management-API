# Student Management REST API

## Description
A Node.js REST API to manage students using an in-memory database

## How to Run
1.  Clone the repo
2.  Run npm install express
3.  Run node server.js
4.  Server runs on http://localhost:7000

## API Endpoints
| Method | Endpoint | Description |
| --- | --- | --- |
| POST | /createstudents | Create a new student |
| GET | /getAllstudents | Get all students |
| GET | /students/:id | Get student by ID |
| PUT | /students/:id | Update student by ID |
| DELETE | /students/:id | Delete student by ID |
