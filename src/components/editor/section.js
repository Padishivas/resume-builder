import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Input, Label, Row, Container, Button } from "reactstrap";
import { v4 as uuid } from "uuid";
import Accordian from "../utils/accordian";
import Slider from "../utils/slider";

export default function Section({ formData }) {
  const state = useSelector((state) => state[formData.redux.state].value);
  const dispatch = useDispatch();
  const [sliderData, setSliderData] = useState({ index: 0, id: "" });
  const colors = {
    bg: [
      "rgba(229, 80, 57,0.3)",
      "rgba(74, 105, 189,0.3)",
      "rgba(96, 163, 188,0.3)",
      "rgba(56, 173, 169,0.3)",
      "rgba(7, 153, 146,0.3)",
    ],
    moveBg: [
      "rgba(229, 80, 57,1.0)",
      "rgba(74, 105, 189,1.0)",
      "rgba(96, 163, 188,1.0)",
      "rgba(56, 173, 169,1.0)",
      "rgba(7, 153, 146,1.0)",
    ],
    leves: ["Novice", "Beginner", "Skillful", "Experienced", "Expert"],
  };
  const handleChange = (event, e, key) => {
    dispatch(
      formData.redux.actions.modify({
        id: e.id,
        update: {
          [key]: event.target.value,
        },
      })
    );
  };
  useEffect(() => {
    if (formData.redux.state == "Skill") {
      dispatch(
        formData.redux.actions.modify({
          id: sliderData.id,
          update: { level: colors.leves[sliderData.index] },
        })
      );
    }
  }, [sliderData.index]);
  return (
    <Container>
      <h6 style={{ margin: "1rem 0" }}>{formData.title}</h6>
      <p style={{ margin: "1rem 0" }}>{formData.desc}</p>
      {state.map((e, i) => {
        let keys = Object.keys(e);
        keys = keys.filter((e) => e != "id");
        return (
          <Accordian title={e[keys[0]]}>
            <Row key={i}>
              {formData.inputs.map((ele, index) => {
                let sliderIndex = 0;
                if(e.level) {
                  sliderIndex = colors.leves.findIndex(level => level == e.level)
                }
                const options = {
                  colors,
                  index: sliderIndex,
                  setIndex: setSliderData,
                };
                let element = (
                  <>
                    <Label>{ele.label}</Label>
                    <Input
                      type={ele.type}
                      onChange={(event) => handleChange(event, e, keys[index])}
                      name={keys[index]}
                    />
                  </>
                );
                if (ele.element == "slider")
                  element = (
                    <>
                      <Label>
                        {ele.label} - {e.level}
                      </Label>
                      <Slider data={{ ...options, id: e.id }} />
                    </>
                  );
                return (
                  <Col key={index} md={ele.col}>
                    {element}
                  </Col>
                );
              })}
              <Button
                className="bg-danger"
                onClick={() => dispatch(formData.redux.actions.remove(e.id))}
              >
                Delete
              </Button>
            </Row>
          </Accordian>
        );
      })}
      <Row>
        <Button
          className="bg-success"
          onClick={() => dispatch(formData.redux.actions.add())}
        >
          Add {formData.title}
        </Button>
      </Row>
    </Container>
  );
}
