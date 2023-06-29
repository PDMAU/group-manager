import Header from "../components/Header/Header";
import ErrorModal from "../components/ErrorModal/ErrorModal";
import { useAuth } from "../contexts/auth";
import { Card, Col, Container, Button, Row } from "react-bootstrap";

const Login = () => {
  const context = useAuth();
  return (
    <Container className="vh-100 px-0" fluid={true}>
      <Header text="Group Manager" />
      <Row className="flex-column h-75 g-1 justify-content-md-center align-items-center">
        <Col xs lg="2" className="d-grid gap-2 col-6 mx-auto">
          <Card className="disableHover">
            <Card.Header>Entre na sua conta</Card.Header>
            <Card.Body>
              <Button
                variant="light"
                size="lg"
                className="border text-primary"
                onClick={() => context.login()}
              >
                <i className="bi bi-google w-auto p-3"> </i>
                Entre com o Google
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <ErrorModal
        showModal={context.showErrorModal}
        setShowModal={context.setShowErrorModal}
        message={"Somente permito login com email 'dac.unicamp.br'"}
      />
    </Container>
  );
};

export default Login;
