import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function GridExample() {
  return (
    <Row xs={1} md={4} className="g-4">
      {Array.from({ length: 10 }).map((_, idx) => (
        <Col key={idx}>
          <Card>
            <Card.Img variant="top" width={64} height={200} src="https://cdn-icons-png.flaticon.com/512/124/124034.png"  fluid/>
            <Card.Body>
              <Card.Title>Sala MC102</Card.Title>
              <Card.Text>
                Grupo dedicado aos alunos da disciplina de mc102
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default GridExample;