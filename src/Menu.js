import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

function BasicExample() {
  return (
    <>
      
        <Navbar key={false} expand={false} className="bg-body-tertiary mb-3">
          <Container fluid>
            <Navbar.Brand href="#">Group Manager</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${false}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${false}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${false}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${false}`}>
                  Conta
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body >                       
                  <Button variant="outline-danger" >Sair</Button>                
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      
    </>
  );
}

export default BasicExample;