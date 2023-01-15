import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Fade, Bounce, Zoom } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import { db } from "../api/Firebase";
import { collection, getDocs } from "firebase/firestore";

const Projects = () => {
  const [list, setList] = useState([]);

  const ProjectCard = (
    imglink,
    heading,
    desc,
    alt,
    livelink,
    gitlink,
    isHosted = true
  ) => {
    return (
      <Card>
        <img src={imglink} alt={alt} />
        <h1>{heading}</h1>
        <p>{desc}</p>
        <ButtonGroup>
          {isHosted ? (
            <a href={livelink} key={desc} target="_blank">
              <ViewBtn>View Live</ViewBtn>
            </a>
          ) : (
            <Disabled disabled>View Live</Disabled>
          )}
          <a href={gitlink} key={imglink} target="_blank">
            <GithubBtn>Github Repo</GithubBtn>
          </a>
        </ButtonGroup>
      </Card>
    );
  };

  useEffect(() => {
    let isSubscribed = true;
    const readData = async () => {
      const querySnapshot = await getDocs(collection(db, "project-list"));
      querySnapshot?.docs.forEach((doc) => {
        if (isSubscribed) setList((list) => [...list, doc.data()]);
      });
    };
    readData();
    return () => (isSubscribed = false);
  }, []);
  return (
    <Wrapper id="project">
      <Fade direction="up">
        <Bounce delay={"3s"}>
          <Title>Featured Projects</Title>
          <Description>
            I have made many small and big project in last few years. So, Guys
            here are a few of my projects. You can visit my github for all
            projects list. You can also suggest me some idea about to create
            project or even we can make together. Check and suggest me where can
            i improve in my project. I don't have any experience in team working
            but i'd love to work together.
          </Description>
          <SubTitle>Project</SubTitle>
        </Bounce>
      </Fade>

      <Zoom>
        <Cards>
          {list &&
            list.map((e) =>
              ProjectCard(
                e.imglink,
                e.heading,
                e.desc,
                e.alt,
                e.livelink,
                e.gitlink,
                e.isHosted
              )
            )}
        </Cards>
      </Zoom>
      <Anchor to="/addproject" key="1">
        <AddProject>Add Projects</AddProject>
      </Anchor>
    </Wrapper>
  );
};

export default Projects;

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
`;

const SubTitle = styled.h2`
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
  grid-template-columns: repeat(3, minmax(0, 1fr));
  height: 100%;
  width: 100%;
  overflow: hidden;
  margin-bottom: 25px;

  @media (max-width: 950px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @media (max-width: 550px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;
const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 16px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;
  border: 1px solid rgba(255, 255, 255, 0.35);
  transition: all 350ms ease-in;
  padding: 10px 10px;
  img {
    width: 75%;
    object-fit: cover;
    border-radius: 5px;
    margin-bottom: 5px;
  }
  p {
    overflow: hidden;
    margin-bottom: 10px;
  }
  &:hover {
    box-shadow: rgba(255, 255, 255, 0.25) 0px 5px 18px,
      rgba(255, 255, 255, 0.25) 0px 5px 10px;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-start;
  @media (max-width: 400px) {
    flex-direction: column;
  }
`;

const ViewBtn = styled.button`
  padding: 10px 15px;
  background: var(--primary-color);
  border: none;
  border-radius: 5px;
  color: var(--white);
  margin-right: 20px;
  cursor: pointer;
  font-size: 15px;
  transition: all 250ms;
  overflow: hidden;

  &:hover {
    background: var(--secondary-color);
    transform: scale(1.2);
  }

  @media (max-width: 950px) {
    width: 100%;
    margin-bottom: 20px;
    margin-right: 10px;
  }
`;

const Disabled = styled(ViewBtn)`
  opacity: 0.4;
  cursor: default;
  &:hover {
    background: var(--primary-color);
    transform: scale(1);
  }
`;

const GithubBtn = styled(ViewBtn)`
  background: transparent;
  color: var(--white);
  border: var(--primary-color) 1px solid;
  &:hover {
    background: var(--primary-color);
    transform: scale(1.2);
  }
`;
const Anchor = styled(Link)`
  text-decoration: none;
  &:hover {
    text-decoration: none;
  }
`;
const AddProject = styled.button`
  padding: 10px 15px;
  background: transparent;
  color: var(--white);
  border: var(--primary-color) 1px solid;
  border-radius: 5px;
  cursor: pointer;
  font-size: 15px;
  transition: all 250ms;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 45%;
  margin: auto;
  margin-bottom: 10px;
  &:hover {
    background: var(--primary-color);
    transform: scale(1.2);
  }
  @media (max-width: 950px) {
    margin-bottom: 20px;
  }
`;
