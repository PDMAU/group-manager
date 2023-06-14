import { useState } from "react";
import { Container, Form, FormControl, Table, Navbar, Nav } from "react-bootstrap";
import './App.css';

const disciplines = [
  {
    name: "Projetos",
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
  // Mais 20 itens
  {
    name: "Engenharia de Software",
    code: "MC 958",
    professor: "Maria Silva",
    capacity: 80,
  },
  {
    name: "Redes de Computadores",
    code: "MC 874",
    professor: "Carlos Oliveira",
    capacity: 70,
  },
  {
    name: "Sistemas Operacionais",
    code: "MC 816",
    professor: "Lucas Santos",
    capacity: 60,
  },
  {
    name: "Banco de Dados",
    code: "MC 833",
    professor: "Juliana Ferreira",
    capacity: 50,
  },
  {
    name: "Inteligência Artificial",
    code: "MC 999",
    professor: "Rafael Garcia",
    capacity: 40,
  },
  {
    name: "Lógica para Computação",
    code: "MC 803",
    professor: "Patricia Costa",
    capacity: 80,
  },
  {
    name: "Estrutura de Dados",
    code: "MC 722",
    professor: "Fernando Oliveira",
    capacity: 60,
  },
  {
    name: "Programação Orientada a Objetos",
    code: "MC 833",
    professor: "Camila Souza",
    capacity: 50,
  },
  {
    name: "Análise de Algoritmos",
    code: "MC 711",
    professor: "Daniel Santos",
    capacity: 40,
  },
  {
    name: "Arquitetura de Computadores",
    code: "MC 843",
    professor: "Ricardo Mendes",
    capacity: 80,
  },
  {
    name: "Sistemas Distribuídos",
    code: "MC 866",
    professor: "Patricia Silva",
    capacity: 70,
  },
  {
    name: "Segurança da Informação",
    code: "MC 911",
    professor: "Gabriel Oliveira",
    capacity: 60,
  },
  {
    name: "Engenharia de Requisitos",
    code: "MC 877",
    professor: "Mariana Costa",
    capacity: 50,
  },
  {
    name: "Gestão de Projetos",
    code: "MC 922",
    professor: "Rafaela Santos",
    capacity: 40,
  },
  {
    name: "Compiladores",
    code: "MC 888",
    professor: "Henrique Ferreira",
    capacity: 80,
  },
  {
    name: "Computação Gráfica",
    code: "MC 855",
    professor: "Laura Oliveira",
    capacity: 70,
  },
];


const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [disciplinesPerPage] = useState(5);

  // Filtro
  const filteredDisciplines = disciplines.filter((discipline) =>
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
    <div>
    <Navbar bg="dark" variant="dark" expand="md" sticky="top">
      <Navbar.Brand href="#">Top navbar</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarCollapse" />
      <Navbar.Collapse id="navbarCollapse">
        <Nav className="mr-auto">
          <Nav.Link href="#">Home</Nav.Link>
          <Nav.Link href="#">Link</Nav.Link>
          <Nav.Link disabled href="#">Desativado</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl
            type="text"
            placeholder="Pesquisa"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Button variant="outline-success">Pesquisar</Button>
        </Form>
        </Navbar.Collapse>
      </Navbar>
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

      <Table striped bordered hover >
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
