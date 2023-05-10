import { useState } from "react";
import { Container, Form, FormControl, Table } from "react-bootstrap";
import './App.css';

const disciplines = [
  {
    name: "Projetos ",
    code: "MC 855",
    professor: "Licio",
    capacity: 50,
  },
  {
    name: "Probabilidade",
    code: "ME 312",
    professor: "Amoras",
    capacity: 40,
  },
  {
    name: "Calculo 3",
    code: "MA 311",
    professor: "Catto",
    capacity: 120,
  },
  {
    name: "Desenvolvimento Web",
    code: "MC 666",
    professor: "Chat GPT",
    capacity: 60,
  },
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

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Code</th>
            <th>Professor</th>
            <th>Capacity</th>
          </tr>
        </thead>
        <tbody>
          {currentDisciplines.map((discipline) => (
            <tr key={discipline.code}>
              <td>{discipline.name}</td>
              <td>{discipline.code}</td>
              <td>{discipline.professor}</td>
              <td>{discipline.capacity}</td>
            </tr>
          ))}
        </tbody>
      </Table>

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
