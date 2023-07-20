import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import styled from "styled-components";
import { Fade, Bounce } from "react-awesome-reveal";
import { getDownloadURL, ref } from "firebase/storage";
import { storage } from "../api/Firebase";
import { homeBG, me } from "../assets";
import { AboutME, Connect, Footer, Projects } from ".";

const Home = () => {
  const [alter, setAlter] = useState(false);
  const [url, setUrl] = useState("");

  useEffect(() => {
    let timer = setInterval(() => {
      setAlter(!alter);
    }, 2000);
    return () => clearInterval(timer);
  }, [alter]);

  const download = () => {
    if (url != "") {
      const element = document.createElement("a");
      element.href = url;
      element.download = "CV";
      document.body.appendChild(element);
      element.target = "_blank";
      element.click();
      document.body.removeChild(a);
    } else {
      getDownloadURL(ref(storage, "/resume/CV.pdf")).then((url) => {
        setUrl(url);
        const element = document.createElement("a");
        element.href = url;
        element.download = "KitishCV";
        document.body.appendChild(element);
        element.target = "_blank";
        element.click();
        document.body.removeChild(a);
      });
    }
  };

  return (
    <Container id="home">
      <Wrapper>
        <Fade direction="up">
            <Contents>
              <h2>Hello, i'm</h2>
              <h1 onClick={() => setAlter(!alter)}>
                {alter ? "Charandeep Kumar" : `Kitish 😎`}
              </h1>
              <Desc>
                Fullstack developer & Coder. B.Tech 3rd Year IIIT Lucknow
                Students. Having interest in coding and exploring new
                technologies.
              </Desc>

              <ButtonGroup>
                <Anchor
                  to="aboutme"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={100}
                >
                  <AboutMEBtn>About me</AboutMEBtn>
                </Anchor>
                <Anchor2>
                  <CVBtn onClick={download} value="download">
                    Resume
                  </CVBtn>
                </Anchor2>
              </ButtonGroup>
            </Contents>
        </Fade>
          <Fade direction="up">
            <Image src={me} alt="" />
          </Fade>
      </Wrapper>

      <AboutME />
      <Projects />
      <Connect />
      <Footer />
    </Container>
  );
};

export default Home;

const Container = styled.div`
  /* min-height: calc(100vh - 70px); */
  padding: 0 calc(3.5vw + 5px);
  position: relative;
  z-index: 0;
  overflow-x: hidden;

  &::before {
    position: absolute;
    content: "";
    inset: 0;
    background: url(${homeBG}) center center / cover no-repeat fixed;
    z-index: -1;
  }
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 950px) {
    flex-direction: column-reverse;
  }
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  h2 {
    font-size: 35px;
    letter-spacing: 2px;
    margin-bottom: 10px;
    &::first-letter {
      color: var(--primary-color);
    }
    @media (max-width: 950px) {
      font-size: 30px;
    }
  }
  h1 {
    font-size: 44px;
    margin-bottom: 10px;

    &::first-letter {
      color: var(--primary-color);
    }
    @media (max-width: 950px) {
      font-size: 39px;
    }
  }
`;

const Desc = styled.p`
  width: 70%;
  margin-bottom: 20px;
  &::first-letter {
    color: var(--primary-color);
    font-size: 25px;
  }
  @media (max-width: 950px) {
    width: 80%;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-start;
  @media (max-width: 400px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Anchor = styled(Link)`
  /* width: 100%; */
`;
const Anchor2 = styled.a`
  /* width: 100%; */
`;
const AboutMEBtn = styled.button`
  padding: 10px 15px;
  background: var(--primary-color);
  border: none;
  border-radius: 5px;
  color: var(--white);
  margin-right: 20px;
  cursor: pointer;
  font-size: 15px;
  transition: all 250ms;
  &:hover {
    background: var(--secondary-color);
    transform: scale(1.2);
  }

  @media (max-width: 950px) {
    margin-bottom: 20px;
  }
`;

const CVBtn = styled(AboutMEBtn)`
  background: transparent;
  color: var(--white);
  border: var(--primary-color) 1px solid;
  &:hover {
    background: var(--primary-color);
    transform: scale(1.2);
  }
`;
const Image = styled.img`
  width: 250px;
  height: 450px;
  overflow: hidden;
  @media (max-width: 950px) {
    margin-bottom: 20px;
  }
`;
