import React from 'react';
import { useEffect, useState } from 'react';
import { Container, ListGroup } from 'react-bootstrap';
import { useHistory } from 'react-router';
import axios from 'axios';
import ContentHeader from '../components/ContentHeader';
import Button from '../components/Button';
import styled from 'styled-components';
import palette from '../styles/palette';
import DemoImg from '../img/demo.png';

const wrapper = {
  minHeight: '90vh',
};

const cont = {
  minHeight: '300px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
};

const listDiv = {
  marginTop: '1rem',
  marginBottom: '1rem',
};

const StyledLi = styled.li`
  list-style-type: none;
  border: none;
  border-top: 0.5px solid ${palette.lightGrayHover};
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 500;
  padding: 1rem 1rem;
  color: ${palette.darkSlateGray};
  text-align: center;
  outline: none;
  cursor: pointer;
  background: ${palette.lightGray};
`;

const demoImgStyle = {
  width: '100px',
};

const demo = {
  margin: '1rem',
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
};

const Demo = () => {
  const onClickDemo = () => {
    window.location.href = '/api/cp/page/render/demo';
  };
  return (
    <div style={demo}>
      <h3>Demo 페이지</h3>
      <img style={demoImgStyle} src={DemoImg} alt="Demo" />
      <Button style={{ margin: '1rem 1rem' }} onClick={onClickDemo}>
        미리보기
      </Button>
    </div>
  );
};

const PageList = ({ id, name, pid }) => {
  const history = useHistory();

  const onClickEdit = () => {
    history.push({
      pathname: '/cpedit',
      state: {
        state: true,
        id: id,
      },
    });
  };

  const onClickView = () => {
    window.location.href = '/api/cp/page/render/' + pid;
  };

  return (
    <div>
      <StyledLi>{name}</StyledLi>
      <Button style={{ margin: '1rem 1rem' }} onClick={onClickEdit}>
        수정
      </Button>
      <Button style={{ margin: '1rem 1rem' }} onClick={onClickView}>
        미리보기
      </Button>
    </div>
  );
};

const MyPage = () => {
  const history = useHistory();
  const [loading, setLoading] = useState(false);
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
      .get('/api/cp/page', {}, { withCredentials: true })
      .then((res) => {
        console.log(res.data.length);
        if (res.data.length !== 0) {
          setLoading(true);
          console.log(res.data);
          setList(res.data);
        }
      })
      .catch((err) => {
        console.log(err.data);
        setLoading(false);
      });
  }, []);

  const onClickCreate = () => {
    history.push({
      pathname: '/cpedit',
      state: {
        state: false,
      },
    });
  };

  return (
    <div style={wrapper}>
      <ContentHeader title="Captive Portal" content=" 을 꾸며보세요 !" />
      <Container style={cont}>
        <Demo />
        {loading ? (
          <div>
            <h4 style={{ textAlign: 'center', margin: '2rem' }}>페이지 목록</h4>
            <div style={listDiv}>
              {list.map((e) => {
                return <PageList id={e.id} name={e.name} pid={e.pid} />;
              })}
            </div>
          </div>
        ) : (
          <h4 style={{ textAlign: 'center', margin: '2rem' }}>
            생성한 페이지가 없습니다.
          </h4>
        )}
        <Button style={{ margin: '2rem 2rem' }} onClick={onClickCreate}>
          만들기
        </Button>
      </Container>
    </div>
  );
};

export default MyPage;
