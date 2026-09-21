import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import AddTeacherPage from "./pages/AddTeacherPage";
import TeacherListPage from "./pages/TeacherListPage";
import teachersData from "./data/teachers.json";

function App() {
  const [teachers, setTeachers] = useState(teachersData);

  function handleAddTeacher(newTeacher) {
    setTeachers([...teachers, newTeacher]);
  }

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<TeacherListPage teachers={teachers} />} />
        <Route path="/teachers" element={<TeacherListPage teachers={teachers} />} />
        <Route path="/add" element={<AddTeacherPage onAdd={handleAddTeacher} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;