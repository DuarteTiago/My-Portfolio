import React from "react";

import styled from "styled-components";

const Card = () => {
  return (
    <>
      <StyledCard>
        <Content>
          <Image src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          <Info>
            <h3>Title</h3>
            <h4>Date</h4>
            <p>shot description</p>
          </Info>
        </Content>
      </StyledCard>
      <StyledCard>
        <Content>
          <Image src="https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          <Info>
            <h3>Title</h3>
            <h4>Date</h4>
            <p>shot description</p>
          </Info>
        </Content>
      </StyledCard>
      <StyledCard>
        <Content>
          <Image src="https://images.pexels.com/photos/459654/pexels-photo-459654.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          <Info>
            <h3>Title</h3>
            <h4>Date</h4>
            <p>shot description</p>
          </Info>
        </Content>
      </StyledCard>
      <StyledCard>
        <Content>
          <Image src="https://images.pexels.com/photos/450035/pexels-photo-450035.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          <Info>
            <h3>Title</h3>
            <h4>Date</h4>
            <p>shot description</p>
          </Info>
        </Content>
      </StyledCard>
      <StyledCard>
        <Content>
          <Image src="https://images.pexels.com/photos/220357/pexels-photo-220357.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          <Info>
            <h3>Title</h3>
            <h4>Date</h4>
            <p>shot description</p>
          </Info>
        </Content>
      </StyledCard>
    </>
  );
};

const StyledCard = styled.div`
  background-color: green;
  min-height: 30vh;
  border-color: #ff6347;
  text-align: center;
  border-radius: 1rem;
  cursor: pointer;
  overflow: hidden;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  height: 100%;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
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
