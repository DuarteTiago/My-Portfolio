import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PortfolioDetail = () => {
  return (
    <Detail>
      <Stats>
        <div>
          <Title>Title</Title>
          <DescriptionShort>
            <p>description</p>
          </DescriptionShort>
        </div>

        <Info>
          <h3>Tecnologias</h3>

          <Technologies>
            <Technologie>
              <FontAwesomeIcon icon={["fab", "react"]} size="4x" />
              React
            </Technologie>
            <Technologie>
              <FontAwesomeIcon icon={["fab", "node"]} size="4x" />
              Node
            </Technologie>
            <Technologie>
              <FontAwesomeIcon icon={["fas", "database"]} size="4x" />
              MongoDB
            </Technologie>
          </Technologies>
        </Info>
      </Stats>
      <Description>
        <p>long description</p>
      </Description>
      <img src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
    </Detail>
  );
};
const Info = styled.div`
  text-align: center;

  min-width: 300px;
  h3 {
    color: #696969;
  }
`;
const Detail = styled.div`
  width: 80%;
  min-height: 70vh;
  background: white;
  position: absolite;
  margin-left: 10%;
  margin-top: 5%;
  margin-bottom: 5%;
  z-index: 10;
  img {
    width: 100%;
    object-fit: cover;
    height: 50vh;
  }
`;

const Stats = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 5rem;
`;
const Title = styled.h2`
  color: #696969;
`;

const Description = styled.div`
  padding: 2rem 5rem;
  p {
    color: black;
  }
`;
const DescriptionShort = styled(Description)`
  padding: 0;
`;
const Technologies = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding-top: 1rem;
  svg {
    color: #ff6347;
  }
`;

const Technologie = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #ff6347;
`;
export default PortfolioDetail;
