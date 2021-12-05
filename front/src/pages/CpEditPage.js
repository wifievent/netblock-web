import React from 'react';
import { useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import axios from 'axios';
import Button from '../components/Button';
import ContentHeader from '../components/ContentHeader';

const title = {
  width: '100%',
  padding: '0',
};

const div = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '80%',
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
  const [state, setState] = useState(false);
  const [inputTitle, setInputTitle] = useState('');
  const [inputContent, setInputContent] = useState('');
  const [inputImage, setInputImage] = useState('');
  const [image, setImage] = useState('');

  useEffect(() => {
    axios
      .get('/api/user/session', {}, { withCredentials: true })
      .then((res) => {})
      .catch((err) => {
        window.location.href = '/';
      });
  }, []);

  useEffect(() => {
    axios
      .get('/api/cp/component')
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

  const onClickButton = () => {
    if (inputTitle === '') {
      alert('제목을 입력하세요');
    } else if (inputContent === '') {
      alert('내용을 입력하세요');
      const formData = new FormData();
      formData.append('title', inputTitle);
      formData.append('content', inputContent);
      formData.append('img', inputImage);
    } else {
      if (state === true) {
        // 이미 컴포넌트 존재 patch
        const formData = new FormData();
        formData.append('title', inputTitle);
        formData.append('content', inputContent);
        formData.append('img', inputImage);

        axios({
          method: 'patch',
          url: '/api/cp/component',
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
        alert('post');
      } else {
        // 컴포넌트 새로 작성 post
        const formData = new FormData();
        formData.append('title', inputTitle);
        formData.append('content', inputContent);
        formData.append('img', inputImage);

        axios({
          method: 'post',
          url: '/api/cp/component',
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
          <div style={div}>
            <div style={title}>제목</div>

            <input
              style={{ width: '100%' }}
              type="text"
              name="title"
              id="title"
              required="true"
              value={inputTitle}
              onChange={handleInputTItle}
            />

            <div style={title}>내용</div>
            <textarea
              style={textArea}
              name="content"
              id="content"
              required="true"
              value={inputContent}
              onChange={handleInputContent}
            ></textarea>

            <img
              src={`http://localhost:3001/uploads/${image}`}
              alt="미리보기"
            />

            <div style={title}>이미지</div>
            <input
              style={input}
              type="file"
              name="img"
              id="img"
              accept="image/*"
              onChange={handleImageChange}
            />
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
