import React from "react";
import { useState } from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import axios from "axios";

const Card = styled.div`
  border: 1px solid black;
  border-radius: 10px;
  width: 100%;
  min-height: 30vh;
  padding: 10px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const LoginPage = () => {
  const [inputId, setInputId] = useState("");
  const [inputPw, setInputPw] = useState("");

  const handleInputId = (e) => {
    setInputId(e.target.value);
  };

  const handleInputPw = (e) => {
    setInputPw(e.target.value);
  };

  const onClickLogin = () => {
    axios
      .post("/user/login", null, {
        params: {
          uid: inputId,
          pw: inputPw,
        },
      })
      .then((res) => {
        console.log(res);
        console.log("res.data.userId :: ", res.data.userId);
        console.log("res.data.msg :: ", res.data.msg);
        if (res.data.userId === undefined) {
          console.log("===================", res.data.msg);
          alert("입력하신 ID가 일치하지 않습니다.");
        } else if (res.data.userId === null) {
          console.log(
            "===================",
            "입력하신 비밀번호가 일치하지 않습니다."
          );
          alert("입력하신 비밀번호가 일치하지 않습니다.");
        } else if (res.data.userId === inputId) {
          console.log("===================", "로그인 성공");
          sessionStorage.setItem("uid", inputId);
        }
      })
      .catch();
  };

  return (
    <Container>
      <Card>
        <h2>Login</h2>
        <div>
          <label htmlFor="input_id">ID : </label>
          <input
            type="text"
            name="input_id"
            value={inputId}
            onChange={handleInputId}
          />
        </div>
        <div>
          <label htmlFor="input_pw">PW : </label>
          <input
            type="password"
            name="input_pw"
            value={inputPw}
            onChange={handleInputPw}
          />
        </div>
        <div>
          <button type="button" onClick={onClickLogin}>
            Login
          </button>
        </div>
      </Card>
    </Container>
  );
};

export default LoginPage;
