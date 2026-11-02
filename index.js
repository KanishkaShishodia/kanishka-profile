import fs from "node:fs/promises";
import { createFile, readFile, updateFile, deleteFile } from "./fileDemo.js";

const studentsPath = "students.json";

// ---------- Students CRUD (JSON) ----------

async function getStudents() {
    try {
        const data = await fs.readFile(studentsPath, "utf8");
        return JSON.parse(data);
    } catch (err) {
        console.error("Error reading students.json:", err);
        return [];
    }
}

async function addStudent(newStudent) {
    const students = await getStudents();
    students.push(newStudent);
    await fs.writeFile(studentsPath, JSON.stringify(students, null, 2), "utf8");
    console.log("Student added:", newStudent);
}

async function updateStudent(id, updatedFields) {
    const students = await getStudents();
    const index = students.findIndex((s) => s.id === id);
    if (index === -1) {
        console.log(`No student found with id ${id}`);
        return;
    }
    students[index] = { ...students[index], ...updatedFields };
    await fs.writeFile(studentsPath, JSON.stringify(students, null, 2), "utf8");
    console.log("Student updated:", students[index]);
}

async function deleteStudent(id) {
    let students = await getStudents();
    const exists = students.some((s) => s.id === id);
    if (!exists) {
        console.log(`No student found with id ${id}`);
        return;
    }
    students = students.filter((s) => s.id !== id);
    await fs.writeFile(studentsPath, JSON.stringify(students, null, 2), "utf8");
    console.log(`Student with id ${id} deleted.`);
}

// ---------- Run everything ----------

async function runFileDemo() {
    console.log("\n--- Text File CRUD Demo ---");
    await createFile("Hello World! This is the first line.");
    await readFile();
    await updateFile("This is an appended second line.");
    await readFile();
    await deleteFile();
    await readFile(); // should throw ENOENT, confirming delete worked
}

async function runStudentDemo() {
    console.log("\n--- Students JSON CRUD Demo ---");
    console.log("Current students:", await getStudents());

    await addStudent({ id: 3, name: "Priya", marks: 95 });
    await updateStudent(1, { marks: 88 });
    await deleteStudent(2);

    console.log("Final students:", await getStudents());
}

async function main() {
    await runFileDemo();
    await runStudentDemo();
}

main();