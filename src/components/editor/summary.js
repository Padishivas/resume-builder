import React from "react";
import { Container, Row, Col,Input } from "reactstrap";

import { useDispatch } from "react-redux";
import { addSummary } from "../../redux/slices/summarySlice";

export default function Summary() {
  const dispatch = useDispatch();
  return (
    <Container>
      <h6 style={{ margin: "1rem 0" }}>Professional Summary</h6>
      <p>
        Write 2-4 short & energetic sentences to interest the reader! Mention
        your role, experience & most importantly - your biggest achievements,
        best qualities and skills.
      </p>
      <Row>
        <Col xs={12}>
          <Input onChange={(e) => dispatch(addSummary(e.target.value))} id="summary" name="text" type="textarea" />
        </Col>
      </Row>
    </Container>
  );
}
