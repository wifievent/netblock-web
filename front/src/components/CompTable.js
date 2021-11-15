import React from 'react';
import { Table, Container, Row, Col } from 'react-bootstrap';
import '../styles/style.css';

const CompTable = () => {
  return (
    <div className="compContent">
      <Container>
        <div>
          <Row className="tableRow">
            <Col md="auto">
              <div className="aboutDesc">
                왜 <span style={{ fontWeight: '700' }}>NetBlock</span> 인가요 ?
              </div>
              <Table borderless="true" className="compTable">
                <thead>
                  <tr>
                    <th></th>
                    <th style={{ color: 'white' }}>NetBlock</th>
                    <th>G 제품</th>
                    <th>A사 제품</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>하나의 프로그램</td>
                    <td>●</td>
                    <td>X</td>
                    <td>X</td>
                  </tr>
                  <tr>
                    <td>조작 불필요</td>
                    <td>●</td>
                    <td>X</td>
                    <td>X</td>
                  </tr>
                  <tr>
                    <td>추가 계정 불필요</td>
                    <td>●</td>
                    <td>X</td>
                    <td>O</td>
                  </tr>
                  <tr className="tabColBottom">
                    <td>인증 절차 제거</td>
                    <td className="tableColBottom">●</td>
                    <td>X</td>
                    <td>O</td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default CompTable;
