import { useState, useEffect } from "react";
import { Container, Form, FormControl, Table, Button } from "react-bootstrap";

import { useNavigate } from "react-router-dom";
import GridExample from "../Groups";

import { disciplines_data } from "../mock/disciplines_data";

const disciplines = disciplines_data;

const Home = ({ login }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [disciplinesPerPage] = useState(10);

  const navigate = useNavigate();

  // Filtro
  const filteredDisciplines = disciplines.filter(
    (discipline) =>
      discipline.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      discipline.code.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Paginação
  const indexOfLastDiscipline = currentPage * disciplinesPerPage;
  const indexOfFirstDiscipline = indexOfLastDiscipline - disciplinesPerPage;
  const currentDisciplines = filteredDisciplines.slice(
    indexOfFirstDiscipline,
    indexOfLastDiscipline
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    if (!login) {
      navigate("/login");
    } else {
    }
  }, []);

  return (
    <Container className="mt-4">
      <div className="header">
        <h1 className="text-center">Disciplinas oferecidades</h1>
      </div>
      <Form className="mb-3">
        <FormControl
          type="text"
          placeholder="Filtrar disciplina"
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
            <th>Instituto</th>
            <th>Info</th>
          </tr>
        </thead>
        <tbody>
          {currentDisciplines.map((discipline) => (
            <tr key={discipline.code}>
              <td>{discipline.name}</td>
              <td>{discipline.code}</td>
              <td>{discipline.professor}</td>
              <td>IMECC</td>
              <td justi>
                <Button variant="info">View Groups</Button>{" "}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <nav>
        <ul className="pagination">
          {[
            ...Array(
              Math.ceil(filteredDisciplines.length / disciplinesPerPage)
            ).keys(),
          ].map((pageNumber) => (
            <li
              key={pageNumber}
              className={`page-item ${
                pageNumber + 1 === currentPage ? "active" : ""
              }`}
            >
              <button
                className="page-link"
                onClick={() => paginate(pageNumber + 1)}
              >
                {pageNumber + 1}
              </button>
            </li>
          ))}
        </ul>
      </nav>
      <GridExample></GridExample>
    </Container>
  );
};

export default Home;
