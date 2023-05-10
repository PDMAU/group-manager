import { useState } from "react";
import { Container, Form, FormControl, ListGroup } from "react-bootstrap";
import './App.css';

const fruits = [
  { name: "Banana" },
  { name: "Apple" },
  { name: "Orange" },
  { name: "Strawberry" },
  { name: "Grape" },
  { name: "Kiwi" },
  { name: "Mango" },
  { name: "Pineapple" },
  { name: "Watermelon" },
];

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [fruitsPerPage] = useState(3);

  // Filtro
  const filteredFruits = fruits.filter((fruit) =>
    fruit.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Paginação
  const indexOfLastFruit = currentPage * fruitsPerPage;
  const indexOfFirstFruit = indexOfLastFruit - fruitsPerPage;
  const currentFruits = filteredFruits.slice(indexOfFirstFruit, indexOfLastFruit);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Container className="mt-4">
      <h1>Fruit List</h1>

      <Form className="mb-3">
        <FormControl
          type="text"
          placeholder="Search by name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </Form>

      <ListGroup>
        {currentFruits.map((fruit, index) => (
          <ListGroup.Item key={index}>{fruit.name}</ListGroup.Item>
        ))}
      </ListGroup>

      <nav>
        <ul className="pagination">
          {[...Array(Math.ceil(filteredFruits.length / fruitsPerPage)).keys()].map(
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

