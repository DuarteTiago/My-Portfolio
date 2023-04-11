import React from "react";

import PortfolioList from "../components/admin/PortfolioList";
import WelcomeTabe from "../components/admin/WelcomeTab";
import { Tab, Tabs, Container } from "react-bootstrap";

import styled from "styled-components";

const Admin = () => {
  return (
    <Container fluid>
      <Jumbotron>
        <h1>Área administrativa</h1>
      </Jumbotron>

      <Tabs defaultActiveKey="home" id="tab-navigate" className="mb-3">
        <Tab eventKey="home" title="Home">
          <WelcomeTabe />
        </Tab>
        <Tab eventKey="portfolio" title="Portfolio">
          <PortfolioList />
        </Tab>
      </Tabs>
    </Container>
  );
};

const Jumbotron = styled.div`
  padding: 2rem 1rem;
  margin-bottom: 2rem;
  background-color: #e9ecef;
  border-radius: 0.3rem;
`;

export default Admin;
