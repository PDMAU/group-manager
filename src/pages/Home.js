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
    // if (!login) {
    //   navigate("/login");
    // } else {
    // }
  }, []);

  return (
    <Container className="mt-4">      
      <div className="header">
        <h1 className="text-center">Grupos disponiveis</h1>
      </div>
      <Form className="mb-3">
        <FormControl
          type="text"
          placeholder="Filtrar grupos"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </Form>
      <GridExample></GridExample>
    </Container>
  );
};

export default Home;
