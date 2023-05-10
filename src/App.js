import { useState } from "react";
import { Container, Form, FormControl, ListGroup } from "react-bootstrap";

const disciplines = [
  { name: "Calculus", code: "MAT101", professor: "John Doe", capacity: 30 },
  { name: "Physics", code: "PHY101", professor: "Jane Smith", capacity: 25 },
  { name: "Computer Science", code: "CSC101", professor: "Bob Johnson", capacity: 20 },
  { name: "History", code: "HIS101", professor: "Alice Williams", capacity: 35 },
  { name: "Chemistry", code: "CHE101", professor: "Mark Brown", capacity: 30 },
  { name: "Biology", code: "BIO101", professor: "Karen Davis", capacity: 25 },
  { name: "Geography", code: "GEO101", professor: "Tom Wilson", capacity: 20 },
  { name: "Literature", code: "LIT101", professor: "Samantha Lee", capacity: 35 },
  { name: "Art", code: "ART101", professor: "David King", capacity: 30 },
];

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [disciplinesPerPage] = useState(3);

  // Filtro
  const filteredDisciplines = disciplines.filter((discipline) =>
    discipline.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Paginação
  const indexOfLastDiscipline = currentPage * disciplinesPerPage;
  const indexOfFirstDiscipline = indexOfLastDiscipline - disciplinesPerPage;
  const currentDisciplines = filteredDisciplines.slice(
    indexOfFirstDiscipline,
    indexOfLastDiscipline
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Container className="mt-4">
      <h1>Discipline List</h1>

      <Form className="mb-3">
        <FormControl
          type="text"
          placeholder="Search by name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </Form>

      <ListGroup>
        {currentDisciplines.map((discipline) => (
          <ListGroup.Item key={discipline.code}>
            <span className="fw-bold">{discipline.name}</span> ({discipline.code}) -{" "}
            Professor: {discipline.professor} - Capacity: {discipline.capacity}
          </ListGroup.Item>
        ))}
      </ListGroup>

      <nav>
        <ul className="pagination">
          {[...Array(Math.ceil(filteredDisciplines.length / disciplinesPerPage)).keys()].map(
            (pageNumber) => (
              <li
                key={pageNumber}
                className={`page-item ${
                  pageNumber + 1 === currentPage ? "active" : ""
                }`}
              >
                <button className="page-link" onClick={() => paginate(pageNumber + 1)}>
                  {pageNumber + 1}
                </button>
              </li>
            )
          )}
        </ul>
      </nav>
    </Container>
  );
};

export default App;
