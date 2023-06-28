import "bootstrap-icons/font/bootstrap-icons.css";
import React, { useEffect, useState } from "react";
import { Card, Col, Container, Form, FormControl, Row } from "react-bootstrap";

import SidebarMenu from "../components/Menu/SidebarMenu";

import "../App.css";
import { disciplines_data } from "../mock/disciplines_data";

const disciplines = disciplines_data;

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [disciplinesPerPage] = useState(18);
  const [categoriaSelecionada, setCategoriaSelecionada] =
    useState("Universidade");
  const [filteredDisciplines, setFilteredDisciplines] = useState([]);

  // Filtrar disciplinas com base na categoria selecionada
  useEffect(() => {
    const filtered = disciplines.filter(
      (discipline) =>
        (discipline.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          discipline.code.toLowerCase().includes(searchTerm.toLowerCase())) &&
        discipline.category.toLowerCase() === categoriaSelecionada.toLowerCase()
    );
    setFilteredDisciplines(filtered);
  }, [searchTerm, categoriaSelecionada]);

  // Paginação
  const indexOfLastDiscipline = currentPage * disciplinesPerPage;
  const indexOfFirstDiscipline = indexOfLastDiscipline - disciplinesPerPage;
  const currentDisciplines = filteredDisciplines.slice(
    indexOfFirstDiscipline,
    indexOfLastDiscipline
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const getHeader = (groupType) => {
    if (groupType === "WHATSAPP") {
      return (
        <span>
          <i className="bi bi-whatsapp"></i> Whatsapp
        </span>
      );
    } else if (groupType === "DISCORD") {
      return (
        <span>
          <i className="bi bi-discord"></i> Discord
        </span>
      );
    }
    // Defina aqui o valor padrão ou uma lógica para outras opções de groupType
    return null;
  };

  const getCardType = (groupType) => {
    if (groupType === "WHATSAPP") {
      return "h-100 text-bg-whatsapp";
    } else if (groupType === "DISCORD") {
      return "h-100 text-bg-discord";
    }
    // Defina aqui o valor padrão ou uma lógica para outras opções de groupType
    return "";
  };

  const handleCardClick = (link) => {
    window.open(link, "_blank");
  };

  const handleMudarCategoria = (categoria) => {
    setCategoriaSelecionada(categoria);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <SidebarMenu onCategoriaChange={handleMudarCategoria} />
        <div className="col-auto col-md-10 min-vh-100 d-flex justify-content-between flex-column">
          <Container className="mt-4">
            <div className="header">
              <h1 className="text-center">{categoriaSelecionada}</h1>
            </div>
            <Form className="mb-3">
              <FormControl
                type="text"
                placeholder="Filtrar grupos"
                value={searchTerm}
                className="filtro"
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </Form>
            <Row xs={1} md={6} lg={6} className="g-4">
              {currentDisciplines.map((discipline, idx) => (
                <Col key={idx}>
                  <Card
                    className={getCardType(discipline.groupType)}
                    onClick={() => handleCardClick(discipline.link)}
                  >
                    <div className="d-flex align-items-center justify-content-center">
                      <Card.Header>
                        {getHeader(discipline.groupType)}
                      </Card.Header>
                    </div>
                    <Card.Body>
                      <Card.Title className="d-flex align-items-center justify-content-center">
                        {discipline.name}
                      </Card.Title>
                      <Card.Text>{discipline.desc}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
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
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Home;
