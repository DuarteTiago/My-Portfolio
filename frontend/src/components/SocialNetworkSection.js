import React from "react";

import styled from "styled-components";
import {
  faGithub,
  faLinkedinIn,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SocialNetworkSection = () => {
  return (
    <Network>
      <Social href="https://github.com/DuarteTiago" target="_blanck">
        <FontAwesomeIcon icon={faGithub} size="3x" />
        <h3>Github</h3>
      </Social>
      <Social
        href="https://www.linkedin.com/in/tiago-duarte-7101831b7/"
        target="_blanck"
      >
        <FontAwesomeIcon icon={faLinkedinIn} size="3x" />
        <h3>LinkedIn</h3>
      </Social>
      <Social href="https://github.com/DuarteTiago" target="_blanck">
        <FontAwesomeIcon icon={faWhatsapp} size="3x" />
        <h3>Whatsapp</h3>
      </Social>
    </Network>
  );
};
const Network = styled.div`
  padding: 1rem 5rem;
`;

const Social = styled.a`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  border-radius: 15px 40px;
  padding-left: 2rem;
  text-decoration: none;
  &:hover {
    background: #ff6347;
    cursor: pointer;
  }
  h3 {
    padding-left: 0, 5rem;
    margin: 2rem;
  }
  color: inherit;
`;
export default SocialNetworkSection;
