import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useApi } from "../hooks/useApi";

const PortfolioDetail = () => {
  let history = useNavigate();
  const { slug } = useParams();
  const { data } = useApi(`/portfolio/${slug}`);

  const exitDetailHandler = (e) => {
    const element = e.target;
    if (element.classList.contains("shaddow")) {
      document.body.style.overflow = "auto";
      history("/portfolio");
    }
  };

  return (
    <CardShaddow className="shaddow" onClick={exitDetailHandler}>
      <Detail>
        <Stats>
          <div>
            <Title>{data?.data?.title} </Title>
            <DescriptionShort>
              <p>{data?.data?.description}</p>
            </DescriptionShort>
          </div>

          <Info>
            <h3>Tecnologias</h3>

            <Technologies>
              {data?.data?.technologies.map((tech) => {
                return (
                  <Technology key={tech.icon}>
                    <FontAwesomeIcon
                      icon={[tech.iconType, tech.icon]}
                      size="4x"
                    />
                    {[tech.label]}
                  </Technology>
                );
              })}
            </Technologies>
          </Info>
        </Stats>
        <Description>
          <p>{data?.data?.longDescription} </p>
        </Description>
        <img src={data?.data?.image} />
      </Detail>
    </CardShaddow>
  );
};
const CardShaddow = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.6);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
  &::-webkit-scrollbar {
    width: 0;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #ff7676;
  }
  &::-webkit-scrollbar-track {
    background: white;
  }
`;
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
  padding: 1rem 3rem;
  p {
    color: black;
    font-size: 18px;
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

const Technology = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #ff6347;
`;
export default PortfolioDetail;
