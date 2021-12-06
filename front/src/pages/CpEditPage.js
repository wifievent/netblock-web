import React from 'react';
import { useState, useEffect } from 'react';
import { Container, Form } from 'react-bootstrap';
import axios from 'axios';
import Button from '../components/Button';
import ContentHeader from '../components/ContentHeader';

const title = {
  width: '100%',
  padding: '0',
};

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

const textArea = {
  width: '100%',
  height: '200px',
};

const input = {
  width: '100%',
  marginBottom: '1rem',
};

const CpEditPage = (props) => {
  const [id, setId] = useState(null);
  const [state, setState] = useState(false);
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

  useEffect(() => {
    setId(props.id);
    axios
      .get('/cp/page/' + id)
      .then((res) => {
        if (res.data === null) {
          setState(false);
        } else {
          setState(true);
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
  }, []);

  const onClickButton = () => {
    if (inputTitle === '') {
      alert('제목을 입력하세요');
    } else if (inputContent === '') {
      alert('내용을 입력하세요');
    } else {
      if (state === true) {
        // 이미 컴포넌트 존재 patch
        const formData = new FormData();
        formData.append('title', inputTitle);
        formData.append('content', inputContent);
        formData.append('img', inputImage);

        axios({
          method: 'patch',
          url: '/cp/page/' + id,
          data: formData,
          headers: { 'Content-Type': 'multipart/form-data' },
        })
          .then((res) => {
            alert('저장되었습니다');
            window.location.href = '/template';
          })
          .catch((err) => {
            console.log(err.data);
          });
      } else {
        // 컴포넌트 새로 작성 post
        const formData = new FormData();
        formData.append('title', inputTitle);
        formData.append('content', inputContent);
        formData.append('img', inputImage);

        axios({
          method: 'post',
          url: '/cp/page',
          data: formData,
          headers: { 'Content-Type': 'multipart/form-data' },
        })
          .then((res) => {
            window.location.href = '/template';
          })
          .catch((err) => {
            console.log(err.data);
          });
      }
    }
  };

  return (
    <div>
      <ContentHeader title="Captive Portal" content=" 을 꾸며보세요 !" />
      <Container>
        <div className="faqCont">
          <div style={cont}>
            <Form>
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
            <Button style={{ marginBottom: '1rem' }} onClick={onClickButton}>
              저장
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CpEditPage;
