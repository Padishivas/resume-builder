import { useSelector, useDispatch } from "react-redux";
import { saveData } from "../../redux/slices/personalDetailsSlice";
import { Row, Col, Container, Label, Input } from "reactstrap";
import { v4 as uuid } from "uuid";
const PersonalDetails = () => {
  const personalDetailsState = useSelector(
    (state) => state.PersonalDetails.value
  );
  const dispatch = useDispatch();

  const form = [
    {
      1: {
        label: "Wanted Job Title",
        type: "text",
        hint: true,
        key: "jobTitle",
      },
      2: {
        label: "Upload Photo",
        type: "file",
        hint: false,
        key: "photo",
      },
    },
    {
      1: {
        label: "First Name",
        type: "text",
        hint: false,
        key: "firstName",
      },
      2: {
        label: "Last Name",
        type: "text",
        hint: false,
        key: "lastName",
      },
    },
    {
      1: {
        label: "Email",
        type: "text",
        hint: false,
        key: "email",
      },
      2: {
        label: "Phone",
        type: "text",
        hint: false,
        key: "phone",
      },
    },
    {
      1: {
        label: "Country",
        type: "text",
        hint: false,
        key: "country",
      },
      2: {
        label: "City",
        type: "text",
        hint: false,
        key: "city",
      },
    },
  ];

  const handleChange = async (key, event) => {
    if (key == "photo") {
      // Async upload image
      const formData = new FormData();
      formData.append("file", event.target.files[0]);
      formData.append("upload_preset", "ci26p8pd");
      const res = await fetch(
        "https://api.cloudinary.com/v1_1/cliqtick/image/upload",
        {
          method: "POST",
          body: formData,
        }
      );
      const data = await res.json();
      console.log(data);
      dispatch(saveData({ [key]: data.secure_url }));
      return;
    }
    dispatch(saveData({ [key]: event.target.value }));
    // dispatch(saveData({ key, value: event.target.value }))
  };

  return (
    <div className="personalDetails-container">
      <h6 style={{margin:"1rem 0"}}>Personal Details</h6>
      <Container>
        {form.map((e,i) => {
          return (
            <Row key={i}>
              <Col xs="6">
                <Label>{e[1].label}</Label>
                <Input
                  type={e[1].type}
                  onChange={(event) => handleChange(e[1].key, event)}
                  className="bg-light"
                />
              </Col>
              <Col xs="6">
                <Label>{e[2].label}</Label>
                <Input
                  type={e[2].type}
                  onChange={(event) => handleChange(e[2].key, event)}
                  className="bg-light"
                />
              </Col>
            </Row>
          );
        })}
      </Container>
    </div>
  );
};
export default PersonalDetails;
