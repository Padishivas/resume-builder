import React, { useRef, useState } from "react";
import AccordianStyles from "./accordian.module.scss";
import Section from "../editor/section";
import { Button, Col, Row } from "reactstrap";
const Accordian = ({ children, title }) => {
  const [height, setHeight] = useState(true);

  const onclick = () => {
    if (height === false) setHeight(true);
    else setHeight(false);
  };
  return (
    <div>
      <Row>
        <Col
          xs={12}
          className={AccordianStyles.button}
          onClick={() => {
            onclick();
          }}
        >
          {title}
        </Col>
      </Row>
      <div
        className={
          height === true
            ? AccordianStyles.showChild
            : AccordianStyles.hideChild
        }
      >
        {children}
      </div>
    </div>
  );
};

export default Accordian;
