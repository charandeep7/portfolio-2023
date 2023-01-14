import React, { useState } from "react";
import styled from "styled-components";
import { storage } from "../api/Firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useNavigate } from "react-router-dom";

const UpdateCV = () => {
  const navigate = useNavigate();

  const [file, setFile] = useState("");
  const [percent, setPercent] = useState(0);
  const [handleFileName, setHandleFileName] = useState(0);
  const [psswd, setPassword] = useState(null);

  const upload = () => {
    if (!file) {
      setHandleFileName(2);
      return;
    }
    if (file.name != "CV.pdf") {
      setHandleFileName(1);
      return;
    }
    if(!psswd){
      alert('Please enter password')
      return
    }
    if (psswd != import.meta.env.VITE_PASSWD) {
      alert("Wrong Password");
      return;
    }
    const storageRef = ref(storage, `/resume/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const percent = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setPercent(percent);
        setHandleFileName(3);
        setInterval(() => {
          localStorage.removeItem("addproject");
          navigate("/");
        }, 5000);
      },
      (err) => console.log(err),
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          console.log(url);
        });
      }
    );
  };
  return (
    <Container>
      <h1>Upload Resume as CV file name</h1>
      <input
        type="file"
        onChange={(e) => {
          setFile(e.target.files[0]);
        }}
        accept="application/pdf"
      />
      <input
          className="file-psswd"
          type="password"
          placeholder="Password"
          name="password"
          value={psswd}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      {handleFileName == 1 ? (
        <h6>File name must be of CV.pdf</h6>
      ) : handleFileName == 2 ? (
        <h6>Please upload a PDF first!</h6>
      ) : handleFileName == 3 ? (
        <h6>Uploaded</h6>
      ) : (
        <></>
      )}
      {percent != 0 ? <h6>{percent}%</h6> : <></>}
      <button onClick={upload}> Upload</button>
    </Container>
  );
};

export default UpdateCV;

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;

  h1 {
    text-decoration: underline;
    margin: 20px 0;
  }
  input {
    margin-bottom: 20px;
    border: 2px solid white;
  }
  .file-psswd{
    padding: 10px;
    margin: 10px;
    margin-bottom: 20px;
    border-radius: 5px;
    outline: none;
    background: var(--form-bg);
    border: none;
    color: var(--white);
  }
  button {
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
  }
  h6 {
    margin-bottom: 20px;
    font-size: 25px;
    text-align: center;
  }
`;
