import React from "react";
import styled from "styled-components";
import { Fade, Bounce,JackInTheBox } from "react-awesome-reveal";
import {
  cpp,
  c,
  java,
  css,
  html,
  firebase,
  git,
  mongo,
  mysql,
  nextjs,
  node,
  js,
  react,
} from "../assets/index";
const MyCard = (img, txt, alt) => {
  return (
    <Card>
      <img src={img} alt={alt} />
      <p>{txt}</p>
    </Card>
  );
};

const AboutME = () => {
  return (
    <Wrapper id="aboutme">
    <Fade direction="up">
      <Title>About Me</Title>
      <Description>
        Hey, My name is Charandeep Kumar (Kitish). I'm currently studying in Indian Institute of Information Technology, Lucknow. I'm in 3rd year B.Tech IT Branch. I've great interset in the solving algothimic problem and developing websites. Recently, I've started studying about react native to develop app. I also love travelling.
        I don't have any fixed and final plan for future but i just want to be a great Engineer.
        <SubTitle>Few Achievements: </SubTitle>
          <li>Specialist on Codeforces (mxRating: 1394)</li>
          <li>LeetCode Rating: 1855</li>
          <li>3★ on Codechef (mxRating: 1627)</li>
          <li>Atcoder Rating: 622</li>
          <li>2nd Winner in Fresher's Cup</li>
      </Description>
      <SubTitle>Knows</SubTitle>
      </Fade>

      <Cards>
        {MyCard(c, "C", "c")}
        {MyCard(cpp, "C++", "cpp")}
        {MyCard(js, "JavaScript", "js")}
        {MyCard(java, "Java", "cpp")}
        {MyCard(react, "React", "react")}
        {MyCard(nextjs, "Next", "next")}
        {MyCard(git, "Git & Github", "git")}
        {MyCard(html, "HTML", "html")}
        {MyCard(css, "CSS", "css")}
        {MyCard(node, "Node", "node")}
        {MyCard(firebase, "Firebase", "firebase")}
        {MyCard(mysql, "MySQL", "mysql")}
        {MyCard(mongo, "MongoDB", "mongodb")}
      </Cards>
    </Wrapper>
  );
};

export default AboutME;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  margin-bottom: 10px;
  letter-spacing: 2px;
  text-transform: uppercase;
  text-shadow: 0px 3px 2px #ccc, 0px 8px 10px rgba(0, 0, 0, 0.15),
    0px 12px 2px rgba(0, 0, 0, 0.7);
  &::first-letter {
    font-size: 55px;
    color: var(--primary-color);
  }
`;
const Description = styled.p`
  width: 75%;
  line-height: 1.5em;
  margin-bottom: 30px;

  &::first-letter {
    color: var(--primary-color);
    font-size: 25px;
  }
  @media (max-width: 950px) {
    width: 80%;
  }
  li{
    margin-top: 15px;
    &::marker{
      color: var(--primary-color);
    }
  }
`;

const SubTitle = styled.h2`
margin-top: 20px;
  margin-bottom: 20px;
  letter-spacing: 2px;
  text-shadow: 0px 4px 3px rgba(0, 0, 0, 0.4), 0px 8px 13px rgba(0, 0, 0, 0.1),
    0px 18px 23px rgba(0, 0, 0, 0.1);
  &::first-letter {
    color: var(--primary-color);
  }
`;
const Cards = styled.div`
  display: grid;
  gap: 25px;
  grid-template-columns: repeat(9, minmax(0, 1fr));
  height: 100%;
  width: 100%;
  overflow: hidden;
  margin-bottom: 25px;

  @media (max-width: 950px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
  @media (max-width: 450px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;
const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 16px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
  border: 1px solid rgba(255, 255, 255, 0.35);
  transition: all 350ms ease-in;
  padding: 10px 0;
  img {
    width: 35%;
  }
  p{
    overflow: hidden;
  }
  &:hover{
    transform: rotate(360deg);
    box-shadow: rgba(255, 255, 255, 0.25) 0px 5px 18px, rgba(255, 255, 255, 0.25) 0px 5px 10px;
    background: var(--primary-color);
  }
`;
