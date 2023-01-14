import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import styled from "styled-components";
import { Fade, Bounce } from "react-awesome-reveal";

import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterCircle,
  AiFillGithub,
} from "react-icons/ai";

const Connect = () => {
  const [email,setEmail] = useState("")
  const [name,setName] = useState("")
  const [msg,setMsg] = useState("")
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // testing purpose, no need to lookup you idiot
    emailjs.sendForm(import.meta.env.VITE_SERVICE_ID,import.meta.env.VITE_TEMPLATE_ID, form.current, import.meta.env.VITE_PUBLIC_KEY)
      .then((result) => {
          alert('Sent')
      }, (error) => {
          alert('Something Went Wrong')
          console.log(error);
      });

      setEmail("")
      setName("")
      setMsg("")
  };
  return (
    <Wrapper id="contact">
      <LeftPanel>
        <Fade direction="up">
          <Title>Connect with me</Title>
          <Desc>Feel free to contact me</Desc>
        </Fade>
        <Bounce>
          <Icons>
            <Anchor
              href="https://www.facebook.com/charandeep.kumar.12"
              target="_blank"
            >
              <AiFillFacebook className="myicon" />
            </Anchor>
            <Anchor
              href="https://www.instagram.com/_kitish"
              target="_blank"
            >
              <AiFillInstagram className="myicon" />
            </Anchor>
            <Anchor
              href="https://www.twitter.com/kitish002"
              target="_blank"
            >
              <AiFillTwitterCircle className="myicon" />
            </Anchor>
            <Anchor
              href="https://www.github.com/charandeep7"
              target="_blank"
            >
              <AiFillGithub className="myicon" />
            </Anchor>
          </Icons>
        </Bounce>
      </LeftPanel>
      <RightPanel>
        <Fade direction="up">
          <Heading>Contact me, let's make magic together</Heading>
        </Fade>
        <Form ref={form} onSubmit={sendEmail}>
          <input type="text" placeholder="Name: " name="user_name" onChange={(e)=>{setName(e.target.value)}} value={name} required />
          <input type="email" placeholder="Email: " name="user_email" onChange={(e)=>{setEmail(e.target.value)}} value={email} required />
          <input type="text" placeholder="Message: " name="message" onChange={(e)=>{setMsg(e.target.value)}} value={msg} required />
          <Bounce>
            <button type="submit" value="Send">Send</button>
          </Bounce>
        </Form>
      </RightPanel>
    </Wrapper>
  );
};

export default Connect;

const Wrapper = styled.div`
  margin: 20px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

  @media (max-width: 950px) {
    flex-direction: column;
  }
`;

const LeftPanel = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 950px) {
    margin-bottom: 35px;
  }
`;
const Title = styled.h1`
  margin-bottom: 10px;
  letter-spacing: 1.1px;
  text-transform: uppercase;
  text-shadow: 0px 3px 2px #ccc, 0px 8px 10px rgba(0, 0, 0, 0.15),
    0px 12px 2px rgba(0, 0, 0, 0.7);
  &::first-letter {
    color: var(--primary-color);
  }
`;
const Desc = styled.p`
  margin-bottom: 10px;
  letter-spacing: 1.1px;
  &::first-letter {
    color: var(--primary-color);
    font-size: 25px;
  }
`;
const Anchor = styled.a`
  color: #fff;
`;
const Icons = styled.div`
  .myicon {
    cursor: pointer;
    font-size: 25px;
    margin: 0 10px;
    transition: all 250ms ease-in-out;
    &:hover {
      color: var(--primary-color);
    }
  }
`;
const RightPanel = styled.div`
  display: flex;
  flex-direction: column;
`;
const Heading = styled.h2`
  margin-bottom: 10px;
  letter-spacing: 1.1px;
  text-transform: capitalize;
  text-shadow: 0px 4px 3px rgba(0, 0, 0, 0.4), 0px 8px 13px rgba(0, 0, 0, 0.1),
    0px 18px 23px rgba(0, 0, 0, 0.1);
  &::first-letter {
    color: var(--primary-color);
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;

  input {
    margin: 5px 0;
    padding: 15px;
    outline: none;
    border: none;
    border-radius: 5px;
    background: var(--form-bg);
    color: var(--white);
    font-size: 18px;
    &:nth-child(3) {
      padding: 25px;
      margin-bottom: 15px;
    }
  }
  button {
    padding: 10px 15px;
    background: var(--primary-color);
    border: none;
    width: 100%;
    border-radius: 5px;
    color: var(--white);
    margin-right: 20px;
    cursor: pointer;
    font-size: 15px;
    transition: all 250ms;
    overflow: hidden;

    &:hover {
      background: var(--secondary-color);
    }
  }
`;
