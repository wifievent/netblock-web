import React from 'react';
import { useEffect, useState } from 'react';
import { Container, ListGroup } from 'react-bootstrap';
import axios from 'axios';
import ContentHeader from '../components/ContentHeader';
import Button from '../components/Button';

const wrapper = {
  minHeight: '85vh',
};

const cont = {
  minHeight: '300px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
};

const Page = ({ title }) => {
  return <ListGroup.item>{title}</ListGroup.item>;
};

const EditPage = () => {
  const [count, setCount] = useState(0);
  const [list, setList] = useState([]);
  useEffect(() => {
    axios
      .get('/api/user/session', {}, { withCredentials: true })
      .then((res) => {})
      .catch((err) => {
        alert('로그인이 필요합니다.');
        window.location.href = '/';
      });
  }, []);
  // todo 로그인 정보 보내서 저장된 cp 목록 가져와서 보여주기
  // 클릭 시 해당 페이지 수정하는 cpedit 으로 이동
  useEffect(() => {
    axios
      .get('/api/cp/component', {}, { withCredentials: true })
      .then((res) => {})
      .catch((err) => {
        console.log(err.data);
      });
  }, []);

  const onClickCreate = () => {
    window.location.href = '/cpedit';
  };

  return (
    <div style={wrapper}>
      <ContentHeader title="Captive Portal" content=" 을 꾸며보세요 !" />
      <Container style={cont}>
        {count === 0 ? (
          <h3 style={{ textAlign: 'center', margin: '1rem' }}>
            생성한 페이지가 없습니다.
          </h3>
        ) : (
          <ListGroup>
            <Page />
          </ListGroup>
        )}
        <Button onClick={onClickCreate}>만들기</Button>
      </Container>
    </div>
  );
};

export default EditPage;
