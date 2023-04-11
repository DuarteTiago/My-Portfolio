import React, { useState } from "react";

import {
  Form,
  Container,
  Card,
  CardGroup,
  Button,
  Col,
  Row,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PortfolioForm = (slug) => {
  const [type, setType] = useState("");
  const [icon, setIcon] = useState("");
  const [label, setLabel] = useState("");

  const handleRemoveItem = (id) => {
    const newTech = slug.tech.filter((el) => el._id !== id);
    slug.setTech(newTech);
  };
  const handleAddItem = () => {
    if (type.length > 0 && label.length > 0 && icon.length > 0) {
      const newId = Math.random().toString(36).substring(7);
      const newTech = {
        iconType: type,
        icon,
        label,
        _id: newId,
      };

      slug.setTech([...slug.tech, newTech]);
    }
  };
  return (
    <Container>
      <Form>
        <Form.Group>
          <Form.Label>Título</Form.Label>
          <Form.Control
            type="text"
            value={slug.title}
            onChange={(e) => slug.setTitle(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Descrição</Form.Label>
          <Form.Control
            type="text"
            value={slug.description}
            onChange={(e) => slug.setDescription(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Descrição completa</Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            value={slug.longDescription}
            onChange={(e) => slug.setLongDescription(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Imagem</Form.Label>
          <Form.Control
            type="text"
            value={slug.image}
            onChange={(e) => slug.setImage(e.target.value)}
          />
        </Form.Group>
      </Form>

      <CardGroup>
        {slug.tech?.map((technology) => {
          return (
            <Card key={technology._id}>
              <Card.Body>
                <Card.Text>
                  <FontAwesomeIcon
                    icon={[technology.iconType, technology.icon]}
                    size="3x"
                  />
                  {technology.label}
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button
                  size="sm"
                  variant="danger"
                  onClick={() => handleRemoveItem(technology._id)}
                >
                  Remover
                </Button>
              </Card.Footer>
            </Card>
          );
        })}
      </CardGroup>

      <Form>
        <Row className="align-items-center">
          <Col sm={3} className="my-1">
            <Form.Control
              placeholder="tipo ex: fab, fas"
              value={type}
              onChange={(e) => setType(e.target.value)}
            />
          </Col>
          <Col sm={3} className="my-1">
            <Form.Control
              placeholder="ícone ex: github, database"
              value={icon}
              onChange={(e) => setIcon(e.target.value)}
            />
          </Col>
          <Col sm={3} className="my-1">
            <Form.Control
              placeholder="label ex: Github, MongoDB"
              value={label}
              onChange={(e) => setLabel(e.target.value)}
            />
          </Col>
          <Col xs="auto" className="my-1">
            <Button onClick={handleAddItem}>Adicionar</Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};
export default PortfolioForm;
