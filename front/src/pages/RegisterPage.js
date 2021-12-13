import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row } from 'react-bootstrap';
import Loader from 'react-loader-spinner';
import Button from '../components/Button';

const container = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: 'auto',
};

const hr = {
  backgroundColor: '#BAC3D4',
  width: '100%',
  margin: '1rem',
};

const row = {
  margin: '0.5rem',
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
};

const Loading = () => {
  return (
    <Loader type="Oval" color="#3d66ba" height={20} width={20} timeout={3000} />
  );
};

const RegisterPage = () => {
  const [submit, setSubmit] = useState({
    inputId: '',
    inputPw: '',
    inputPwChk: '',
    inputName: '',
    inputEmail: '',
    inputAuth: '',
  });
  const [auth, setAuth] = useState(false); // 이메일 인증완료 여부 체크
  const [inputState, setInputState] = useState(false); // 다 차있는지 체크
  const [pwChk, setPwChk] = useState(false); // 비번과 확인 같은지 체크
  const [idChk, setIdChk] = useState(false); // id 중복체크 완료 여부 체크
  const [loading, setLoading] = useState(null);

  useEffect(() => {
    let count = Object.keys(submit)
      .map((key) => submit[key])
      .filter((input) => input !== '');
    if (count.length === 6) {
      setInputState(true);
    } else {
      setInputState(false);
    }
  }, [submit]);

  useEffect(() => {
    if (submit.inputPw === submit.inputPwChk) {
      setPwChk(true);
    } else {
      setPwChk(false);
    }
  }, [submit]);

  const handleInput = (e) => {
    setSubmit({ ...submit, [e.target.id]: e.target.value });
  };

  const emailHandler = () => {
    setLoading(true);
    axios
      .post('/api/user/email', {
        email: submit.inputEmail,
      })
      .then((res) => {
        alert('해당 이메일로 인증번호를 발송하였습니다.');
        setLoading(false);
      })
      .catch((err) => {
        console.log();
      });
  };

  const authHandler = () => {
    axios
      .post('/api/user/auth', {
        number: submit.inputAuth,
      })
      .then((res) => {
        setAuth(true);
      })
      .catch(() => {
        setAuth(false);
      });
  };

  const idHandler = () => {
    axios
      .post('/api/user/check', {
        uid: submit.inputId,
      })
      .then((res) => {
        alert('사용할 수 있는 ID 입니다.');

        setIdChk(true);
      })
      .catch(() => {
        alert('사용할 수 없는 ID 입니다.');
        setIdChk(false);
      });
  };

  const onClickRegister = () => {
    if (inputState && idChk && pwChk && auth) {
      axios({
        method: 'post',
        url: '/api/user/register',
        data: {
          uid: submit.inputId,
          pw: submit.inputPw,
          name: submit.inputName,
          email: submit.inputEmail,
        },
      })
        .then((res) => {
          window.location.href = '/login';
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <Container style={container}>
      <Row style={row}>
        <h2 style={{ textAlign: 'center' }}>회원가입</h2>
      </Row>

      <hr style={hr} />

      <Row style={row}>
        <div>
          <label htmlFor="input_id">ID</label>
          <div>
            <input
              type="text"
              name="input_id"
              id="inputId"
              value={submit.inputId}
              onChange={handleInput}
            />
            <Button onClick={idHandler}>중복체크</Button>
          </div>
        </div>
      </Row>
      <Row style={row}>
        <label htmlFor="input_pw">비밀번호</label>
        <div>
          <input
            type="password"
            name="input_pw"
            id="inputPw"
            value={submit.inputPw}
            onChange={handleInput}
          />
        </div>
      </Row>
      <Row style={row}>
        <label htmlFor="input_pw">비밀번호 확인</label>
        <div>
          <input
            type="password"
            name="input_pw_chk"
            id="inputPwChk"
            value={submit.inputPwChk}
            onChange={handleInput}
          />
          {submit.inputPw !== '' && pwChk ? (
            <span style={{ color: '#31ECA9' }}> ✔</span>
          ) : submit.inputPwChk === '' ? (
            ''
          ) : (
            <span style={{ color: 'red' }}> ❌</span>
          )}
        </div>
      </Row>
      <Row style={row}>
        <label htmlFor="input_name">이름</label>
        <div>
          <input
            type="text"
            name="input_name"
            id="inputName"
            value={submit.inputName}
            onChange={handleInput}
          />
        </div>
      </Row>
      <Row style={row}>
        <label htmlFor="input_email">e-mail</label>
        <div>
          <input
            type="text"
            name="input_email"
            id="inputEmail"
            value={submit.inputEmail}
            onChange={handleInput}
          />

          <Button onClick={emailHandler} disabled={loading}>
            {loading ? <Loading /> : '보내기'}
          </Button>
        </div>
      </Row>
      <Row style={row}>
        <label htmlFor="input_email">인증번호</label>
        <div>
          <input
            type="text"
            name="input_auth"
            id="inputAuth"
            value={submit.inputAuth}
            onChange={handleInput}
          />

          <Button onClick={authHandler}>인증확인</Button>
        </div>
      </Row>
      <Row>
        <Button style={{ marginTop: '1rem' }} onClick={onClickRegister}>
          Sign up
        </Button>
      </Row>
    </Container>
  );
};

export default RegisterPage;
