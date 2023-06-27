import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

const GroupModal = ({ showModal }) => {
  const [lgShow, setLgShow] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const [showAdditionalFields, setShowAdditionalFields] = useState(false);

  useEffect(() => {
    setLgShow(showModal);
  }, [showModal]);

  const handleOptionChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);

    if (selectedValue === '1') {
      setShowAdditionalFields(true);
    } else {
      setShowAdditionalFields(false);
    }
  };

  const handleCloseModal = () => {
    setLgShow(false);
    setShowAdditionalFields(false);
  };

  return (
    <>      
      <Modal
        size="lg"
        show={lgShow}
        onHide={handleCloseModal}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Cadastro de novo grupo
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Nome do Grupo</Form.Label>
              <Form.Control type="text" placeholder="ex: grupo de volei toda quarta" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Tipo do Grupo</Form.Label>
              <Form.Select aria-label="Default select example" onChange={handleOptionChange}>
                <option>Selecione uma categoria</option>
                <option value="1">Universidade</option>
                <option value="2">Esportes</option>
                <option value="3">Games</option>
                <option value="4">Estudos</option>
                <option value="5">Festas</option>
              </Form.Select>
            </Form.Group>
            {showAdditionalFields && (
              <div>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Instituto</Form.Label>
                  <Form.Select aria-label="Default select example">
                    <option>Selecione um Instituto</option>
                    <option value="1">Instituto de Computaçao</option>
                    <option value="2">Faculdade de Economia</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Disciplina</Form.Label>
                  <Form.Select aria-label="Default select example">
                    <option>Selecione uma Disciplina</option>
                    <option value="1">mc102 - Logica de Programacao</option>
                    <option value="2">mc853 - Projeto de Sistemas de Informaçao</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Turma</Form.Label>
                  <Form.Select aria-label="Default select example">
                    <option>Selecione uma Turma</option>
                    <option value="1">A</option>
                    <option value="2">B</option>
                  </Form.Select>
                </Form.Group>
              </div>
            )}
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Descrição do Grupo</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Para onde é o link Grupo</Form.Label>
              <Form.Select aria-label="Default select example">
                <option>Selecione de onde é o link Grupo</option>
                <option value="1">Whatsapp</option>
                <option value="2">Discord</option>
                <option value="3">Telegram</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Link do Grupo</Form.Label>
              <Form.Control type="text" placeholder="ex: https://chat.whatsapp.com/EC2Rwcd9CKDTCIF8Eknaymaop" />
            </Form.Group>
            <Button variant="primary" size="lg" active>
              Cadastrar
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default GroupModal;
