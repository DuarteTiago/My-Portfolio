import React, { useEffect, useState } from "react";
import { Container, Card } from "react-bootstrap";
import { useApi } from "../../hooks/useApi";

const WelcomeTabe = () => {
  const { data } = useApi("/portfolio");
  const [qtyItems, setQtyItems] = useState(0);
  useEffect(() => {
    data && setQtyItems(data.data.length);
  }, [data]);
  return (
    <Container>
      <Card bg="dark" text="light" className="mb-2 text-center p-3">
        <Card.Header>Bem vindo!</Card.Header>
        <Card.Body>
          <Card.Title>Itens em seu Portfólio</Card.Title>
          <Card.Text style={{ fontSize: 120 }}>{qtyItems}</Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};
export default WelcomeTabe;
