import React from 'react';
import { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router';
import { Container, Form } from 'react-bootstrap';
import axios from 'axios';
import Button from '../components/Button';
import ContentHeader from '../components/ContentHeader';

const cont = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '2rem',
  marginBottom: '1rem',
  width: '80%',
};

const formLable = {
  marginTop: '1rem',
};

const CpEditPage = () => {
  const history = useHistory();
  const location = useLocation();
  const [id, setId] = useState(null);
  const [state, setState] = useState(false);
  const [inputName, setInputName] = useState('');
  const [inputTitle, setInputTitle] = useState('');
  const [inputContent, setInputContent] = useState('');
  const [inputImage, setInputImage] = useState('');
  const [image, setImage] = useState('');

  useEffect(() => {
    axios
      .get('/user/session', {}, { withCredentials: true })
      .then((res) => {})
      .catch((err) => {
        window.location.href = '/';
      });
  }, []);

  useEffect(() => {
    if (location.state.state === true) {
      setId(location.state.id);
      axios
        .get('/cp/page/' + id)
        .then((res) => {
          if (res.data === null) {
            setState(false);
          } else {
            setState(true);
            setInputName(res.data.name);
            setInputTitle(res.data.title);
            setInputContent(res.data.content);
            if (res.data.file === null) {
              // 파일 없음
            } else {
              setImage(res.data.file.filename);
              console.log(image);
            }
          }
        })
        .catch((err) => {
          alert('로그인이 필요합니다.');
          // window.location.href = '/';
        });
    }
  }, []);

  const handleInputName = (e) => {
    setInputName(e.target.value);
  };

  const handleInputTItle = (e) => {
    setInputTitle(e.target.value);
  };

  const handleInputContent = (e) => {
    setInputContent(e.target.value);
  };

  const handleImageChange = (e) => {
    const img = e.target.files[0];
    setInputImage(img);
  };

  const onClickButton = () => {
    if (inputName === '') {
      alert('페이지 이름을 입력하세요');
    } else if (inputTitle === '') {
      alert('제목을 입력하세요');
    } else if (inputContent === '') {
      alert('내용을 입력하세요');
    } else {
      history.push({
        pathname: '/template',
        state: {
          name: inputName,
          title: inputTitle,
          content: inputContent,
          image: inputImage,
          state: state,
          id: location.state.id,
        },
      });
    }
  };

  return (
    <div>
      <ContentHeader title="Captive Portal" content=" 을 꾸며보세요 !" />
      <Container>
        <div className="faqCont">
          <div style={cont}>
            <Form>
              <Form.Label style={formLable}>페이지 이름</Form.Label>
              <Form.Control
                type="text"
                id="name"
                required="true"
                value={inputName}
                onChange={handleInputName}
              />
              <Form.Label style={formLable}>제목</Form.Label>
              <Form.Control
                type="text"
                id="title"
                required="true"
                value={inputTitle}
                onChange={handleInputTItle}
              />
              <Form.Label style={formLable}>내용</Form.Label>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
                id="content"
                required="true"
                value={inputContent}
                onChange={handleInputContent}
              >
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
              <Form.Group
                controlId="formFile"
                className="mb-3"
                name="img"
                id="img"
                accept="image/*"
                onChange={handleImageChange}
              >
                <Form.Label>이미지</Form.Label>
                <Form.Control type="file" />
              </Form.Group>
            </Form>

            {state ? (
              <img
                src={`http://localhost:3001/uploads/${image}`}
                alt="미리보기"
              />
            ) : null}
            <Button
              style={{ marginTop: '1rem', marginBottom: '1rem' }}
              onClick={onClickButton}
            >
              저장
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CpEditPage;
