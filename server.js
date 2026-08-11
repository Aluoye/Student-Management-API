const express = require ("express");
const app = express();
const port = 7000;

//Middleware to read JSON
app.use(express.json());


//In memory database
let students = [
    { id: 1, name: "Aisha Bello", age: 20, course: "English", gender: "Female", class: "300L" },
    { id: 2, name: "Chinedu Okoro", age: 22, course: "Computer Science", gender: "Male", class:"200L" },
    { id: 3, name: "Fatima Yusuf", age: 21, course: "Mathematics", gender: "Female", class: "100L" },
    { id: 4, name: "Emeka Nwosu", age: 23, course: "Physics", gender: "Male", class: "300L" },
    { id: 5, name: "Amina Abdullahi", age: 19, course: "Biology", gender: "Female", class: "100L" },
    { id: 6, name: "Ibrahim Musa", age: 24, course: "Chemistry", gender: "Male", class: "300L" },
    { id: 7, name: "Ngozi Okafor", age: 20, course: "Economics", gender: "Female", class: "200L" },
    { id: 8, name: "Hassan Bello", age: 22, course: "History", gender: "Male", class: "200L" },
    { id: 9, name: "Chiamaka Eze", age: 21, course: "Political Science", gender: "Female", class: "100L" },
    { id: 10, name: "Abdulrahman Sani", age: 23, course: "Sociology", gender: "Male", class: "300L" },
    { id: 11, name: "Maryam Abubakar", age: 20, course: "Philosophy", gender: "Female", class: "100L" },
    { id: 12, name: "Oluwaseun Adeyemi", age: 22, course: "Geography", gender: "Male", class: "200L" },
    { id: 13, name: "Tunde Adebayo", age: 21, course: "Psychology", gender: "Male", class: "300L" },
    { id: 15, name: "Chukwuemeka Okeke", age: 19, course: "Linguistics", gender: "Male", class: "100L" }
];

let nextId = 16;

//Add a student
app.post("/createstudents", (req, res) => {
    const { name, age, course, gender, class: studentClass } = req.body;
    const newStudent = { id: nextId++, name, age, course, gender, class: studentClass };
    students.push(newStudent);
    res.status(201).json({message: "Student added", student: newStudent});
});

//GETAll students
app.get("/getAllstudents", (req, res) => {res.json(students)});

//get a single student
app.get("/students/:id", (req, res) => {
    const studentId = parseInt(req.params.id);
    const student = students.find((s) => s.id === studentId);
    if (!student) {
        return res.status(404).json({error: "Student not found"});
    }
    res.status(200).json({message: "Student found", student: student});
});

//update a student by id
app.put("/students/:id", (req, res) => {
    const studentId = parseInt(req.params.id);
    const { name, age, course, gender, class: studentClass } = req.body;
    const student = students.find((s) => s.id === studentId);
    if (!student) {
        return res.status(404).json({error: "Student not found"});
    }
    student.name = name;
    student.age = age;
    student.course = course;
    student.gender = gender;
    student.class = studentClass;

    res.status(200).json({message: "Student updated", student: student});
});

//Delete a student by id
    app.delete("/students/:id", (req, res) => {
        const studentId = parseInt(req.params.id);
        const studentIndex = students.findIndex((s) => s.id === studentId);
        if (studentIndex === -1) {
            return res.status(404).json({error: "Student not found"});
        }
        students.splice(studentIndex, 1);
        res.status(200).json({message: "Student deleted successfully"});
    });

    
app.listen(7000, () => {    
    console.log(`Server is running on http://localhost:7000`);
    });