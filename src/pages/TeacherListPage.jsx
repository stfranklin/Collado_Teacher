function TeacherListPage({ teachers }) {
  return (
    <div className="page">
      <h1>Teacher's List</h1>

      <div className="teacher-container">
        {teachers.map((teacher) => (
          <div className="teacher-card" key={teacher.id}>
            <h2>{teacher.name}</h2>
            <p>Specialization: {teacher.specialization}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TeacherListPage;