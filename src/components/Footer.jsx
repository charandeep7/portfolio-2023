import React from "react";
import styled from "styled-components";
import { AttentionSeeker } from "react-awesome-reveal";

const createLinks = (url, txt) => {
  return (
    <a href={url} target="_blank">
      <p>{txt}</p>
    </a>
  );
};
const Footer = () => {
  return (
    <Wrapper>
      <AttentionSeeker effect="flash">
        <Starting>
          @{new Date().getFullYear()} Charandeep Kumar (KITISH)
        </Starting>
      </AttentionSeeker>
      <NavLinks>
        {createLinks("https://leetcode.com/_kitish/", "Leetcode")}
        {createLinks("https://codeforces.com/profile/_kitish", "Codeforces")}
        {createLinks("https://www.codechef.com/users/kitish2003", "Codechef")}
        {createLinks(
          "https://stackoverflow.com/users/17808268/kitish",
          "Stackoverflow"
        )}
      </NavLinks>
      <Ending>Designed by @me</Ending>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 25px;
`;
const Starting = styled.p`
  color: red;
  margin-bottom: 5px;
  cursor: none;
  text-align: center;
  text-align-last: center;
`;
const NavLinks = styled.div`
  display: flex;
  justify-content: space-around;
  a {
    color: #fff;
    text-decoration: none;
  }
  p {
    margin: 0 5px;
    cursor: pointer;
    &::first-letter {
      color: var(--primary-color);
    }
    &:hover {
      color: var(--primary-color);
      text-decoration: underline;
    }
  }

  @media (max-width: 380px) {
    align-items: center;
    flex-direction: column;
  }
`;

const Ending = styled.p`
  padding-bottom: 10px;
`;
