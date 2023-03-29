import React from "react";
import moment from "moment";

import styled from "styled-components";
import { Link } from "react-router-dom";

const Card = ({ project }) => {
  return (
    <StyledCard>
      <Link to={`/portfolio/${project.slug}`}>
        <Content>
          <Image src={project.image} />
          <Info>
            <h3>{project.title}</h3>
            <h4>{moment(project.createdAt).format("MMM  YYYY")}</h4>
            <p>{project.description}</p>
          </Info>
        </Content>
      </Link>
    </StyledCard>
  );
};

const StyledCard = styled.div`
  background-color: #282828;
  box-shadow: 0px 5px 10px #ff6347;
  min-height: 30vh;
  text-align: center;
  border-radius: 1rem;
  cursor: pointer;
  overflow: hidden;
  a {
    text-decoration: none;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  height: 65vh;
`;
const Image = styled.img`
  width: 100%;
  height: 70%;
`;

const Info = styled.div`
  text-align: left;
  padding: 1rem;
  diplay: flex;
  flex-direction: column;
  justfy-content: spce-between;
  h3 {
    padding-top: 2rem;
  }
`;

export default Card;
