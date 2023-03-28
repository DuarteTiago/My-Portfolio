import React from "react";
import styled from "styled-components";
const PortfolioDetail = () => {
  return (
    <Detail>
      <Stats>
        <div>
          <div>Title</div>
          <p>description</p>
        </div>
        <div>
          <div>Platafomas/tecnologies</div>
        </div>
      </Stats>
      <Description>
        <p>long description</p>
      </Description>
      <div>img</div>
    </Detail>
  );
};

const Detail = styled.div`
  width: 80%;
  min-height: 70vh;
  background: white;
  position: absolite;
  margin-left: 10%;
  margin-top: 5%;
  margin-bottom: 5%;
  z-index: 10;
`;

const Stats = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 5rem;
`;

const Description = styled.div`
  padding: 2rem 5rem;
  p {
    color: black;
  }
`;
export default PortfolioDetail;
