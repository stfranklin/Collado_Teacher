import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddTeacherPage({ onAdd }) {
  const [name, setName] = useState("");
  const [specialization, setSpecialization] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if (!name || !specialization) return;

    onAdd({
      id: Date.now(),
      name: name,
      specialization: specialization,
    });

    navigate("/teachers");
  }

  return (
    <div className="page">
      <h1>Add Teacher</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Teacher Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Specialization"
          value={specialization}
          onChange={(e) => setSpecialization(e.target.value)}
        />
        <button type="submit">Add Teacher</button>
      </form>
    </div>
  );
}

export default AddTeacherPage;