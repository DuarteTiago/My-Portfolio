import React from "react";

import styled from "styled-components";

import { About, Description, Image } from "../styles";

const ServicesSection = () => {
  return (
    <Services>
      <Image>
        <img src="https://thumbs.dreamstime.com/b/services-concept-flat-line-design-icons-elements-modern-services-concept-s-collection-services-concept-lettering-thin-68961333.jpg"></img>
      </Image>
      <ServiceDescription>
        <h2>Minhas Habilidades</h2>
        <Cards>
          <Card>
            <div className="icon">
              Icone
              <h3>Portfolio</h3>
            </div>
            <p>Check my work on my portfolio</p>
          </Card>
          <Card>
            <div className="icon">
              Icone
              <h3>Cursos</h3>
            </div>
            <p>Check my work on my portfolio</p>
          </Card>
          <Card>
            <div className="icon">
              Icone
              <h3>Hobbies</h3>
            </div>
            <p>Check my work on my portfolio</p>
          </Card>
          <Card>
            <div className="icon">
              Icone
              <h3>Github</h3>
            </div>
            <p>Check my work on my portfolio</p>
          </Card>
        </Cards>
      </ServiceDescription>
    </Services>
  );
};

const Services = styled(About)`
  h2 {
    padding-top: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
`;

const ServiceDescription = styled(Description)`
  flex: 2;
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 1.5rem;
`;
const Card = styled.div`
  padding: 0.5rem;
  flex-basis: 20rem;
  .icon {
    display: flex;
    align-items: center;
  }
  h3 {
    margin-left: 1rem;
    background: white;
    color: black;
    padding: 1rem;
  }
`;
export default ServicesSection;
