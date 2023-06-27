import { useState } from "react";
import { Container, Form, FormControl, Card, Col, Row } from "react-bootstrap";

import SidebarMenu from "../components/Menu/SidebarMenu";

import { disciplines_data } from "../mock/disciplines_data";
import "../App.css";

const disciplines = disciplines_data;

const Home = ({ logout, profile }) => {
  const [searchTerm, setSearchTerm] = useState("");

  // Filtro
  const filteredDisciplines = disciplines.filter(
    (discipline) =>
      discipline.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      discipline.code.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getImageSrc = (groupType) => {
    if (groupType === "WHATSAPP") {
      return "https://cdn-icons-png.flaticon.com/512/124/124034.png";
    } else if (groupType === "DISCORD") {
      return "https://logosmarcas.net/wp-content/uploads/2020/11/Discord-Emblema.jpg";
    }
    // Defina aqui o valor padrão ou uma lógica para outras opções de groupType
    return "";
  };


  return (
    <div className="container-fluid">
      <div className="row">
        <SidebarMenu logout={logout} profile={profile} />
        <div className="col-auto col-md-10 min-vh-100 d-flex justify-content-between flex-column">
          <Container className="mt-4">
            <div className="header">
              <h1 className="text-center">Grupos disponíveis</h1>
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
              {filteredDisciplines.map((discipline, idx) => (
                <Col key={idx}>
                  <Card className="h-100">
                    <div className="d-flex align-items-center justify-content-center">
                      <Card.Img
                        variant="top"
                        width={64}
                        height={150}
                        src={getImageSrc(discipline.groupType)}
                        fluid
                      />
                    </div>
                    <Card.Body>
                      <Card.Title>{discipline.name}</Card.Title>
                      <Card.Text>{discipline.desc}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Home;
