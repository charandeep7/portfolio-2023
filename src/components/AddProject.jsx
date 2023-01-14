import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AttentionSeeker } from "react-awesome-reveal";
import styled from "styled-components";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../api/Firebase";

const AddProject = () => {
  const navigate = useNavigate();
  const [psswd, setPassword] = useState(null);
  const [data, setData] = useState({
    heading: "",
    desc: "",
    imglink: "",
    alt: "",
    livelink: "",
    gitlink: "",
    isHosted: false,
  });
  const writeData = async () => {
    const response = await addDoc(collection(db, "project-list"), data);
    return response.id;
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (psswd != import.meta.env.VITE_PASSWD) {
      alert("Wrong Password");
    } else {
      const isSucess = writeData();
      if (isSucess) {
        alert("Added Succesfully");
        localStorage.removeItem("addproject");
        navigate("/");
      } else {
        alert("Something Went Wrong");
      }
    }
  };
  return (
    <Container>
      <Heading>This is only for Admin</Heading>
      <Form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Project Name"
          name="heading"
          value={data.heading}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          placeholder="About Project"
          name="desc"
          value={data.desc}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          placeholder="Image URL"
          name="imglink"
          value={data.imglink}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          placeholder="Alt attribute"
          name="alt"
          value={data.alt}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          placeholder="Hosted Link"
          name="livelink"
          value={data.livelink}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          placeholder="GitRepo Link"
          name="gitlink"
          value={data.gitlink}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          placeholder="isYourWebsiteHosted?(true/false)"
          name="isHosted"
          value={data.isHosted}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={psswd}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Add Project</button>
        <AttentionSeeker effect="rubberBand">
          <Link to="/updatecv">
            <button type="button" className="updatecv">
              👀 ? Want to Update CV 👀 ?
            </button>
          </Link>
        </AttentionSeeker>
      </Form>
    </Container>
  );
};

export default AddProject;

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Heading = styled.h1`
  text-align: center;
  text-decoration: underline;
`;

const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  input {
    padding: 10px;
    margin: 10px;
    border-radius: 5px;
    outline: none;
    background: var(--form-bg);
    border: none;
    color: var(--white);
    width: 100%;
    &:nth-child(1) {
      margin-top: 25px;
    }
  }

  button {
    padding: 10px 10px;
    margin-bottom: 10px;
    background: var(--primary-color);
    border: none;
    width: 100%;
    border-radius: 5px;
    color: var(--white);
    cursor: pointer;
    font-size: 15px;
    transition: all 250ms;
    overflow: hidden;

    &:hover {
      background: var(--secondary-color);
    }
  }
  .updatecv {
    background-color: red;
    animation: blinking 1s ease-in-out infinite;

    @keyframes blinking {
      0% {
        background-color: red;
      }
      50% {
        background-color: black;
      }
      100% {
        background-color: red;
      }
    }
  }
`;
