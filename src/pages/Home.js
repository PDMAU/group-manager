import { useState } from "react";
import { Container, Form, FormControl } from "react-bootstrap";

import GridExample from "../Groups";
import SidebarMenu from "../components/Menu/SidebarMenu";

import { disciplines_data } from "../mock/disciplines_data";

const disciplines = disciplines_data;

const Home = ({ logout, profile }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [disciplinesPerPage] = useState(10);

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

  return (
    <div className="container-fluid">
      <div className="row">
        <SidebarMenu logout={logout} profile={profile} />
        <div className="col-auto col-md-10 min-vh-100 d-flex justify-content-between flex-column">
          <Container className="mt-3">
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
        </div>
      </div>
    </div>
  );
};

export default Home;
