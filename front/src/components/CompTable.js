import React from "react";
import { Table, Container } from "react-bootstrap";
import "../styles/style.css";

const CompTable = () => {
  return (
    <div>
      <Container>
        <Table borderless="true" className="compTable">
          <thead>
            <tr>
              <th></th>
              <th>NetBlock</th>
              <th>I사 공유기</th>
              <th>G모 제품</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>품질</td>
              <td>O</td>
              <td>O</td>
              <td>X</td>
            </tr>
            <tr>
              <td>안정성</td>
              <td>O</td>
              <td>X</td>
              <td>X</td>
            </tr>
            <tr>
              <td>스근함</td>
              <td colSpan="2">O</td>
              <td>X</td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default CompTable;
